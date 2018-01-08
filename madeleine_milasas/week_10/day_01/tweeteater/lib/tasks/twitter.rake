namespace :twitter do
  desc "Destroy all users and tweets"
  task :clear => :environment do
    User.destroy_all
    Tweet.destroy_all
    Rake::Task['twitter:stats'].invoke
  end

  desc "Prints stats"
  task :stats => :environment do
    puts "Users: #{ User.count }, Tweets: #{ Tweet.count }"
  end

  desc "Populates the tweet and user tables with Faker data"
  task :populate, [:user_count] => :environment do |t, args|
    args[:user_count].to_i.times do
      user = User.create :email => Faker::Internet.email
      rand(1..50).times do
        user.tweets.create :content => Faker::Lorem.sentence
      end
    end
    Rake::Task['twitter:stats'].invoke
  end

  desc "Populates the Tweet table with real live data from Twitter"
  task :search, [:query, :count, :lang] => :environment do |t, args|
    puts "Searching Twitter for #{ args[:count] } tweet(s) mentioning #{ args[:query] } (language code: #{ args[:lang] })"

    # my homework code
    # AUTH CONFIG for twitter gem
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["TWITTER_API_KEY"]
      config.consumer_secret     = ENV["TWITTER_API_SECRET"]
      config.access_token        = ENV["TWITTER_TOKEN"]
      config.access_token_secret = ENV["TWITTER_TOKEN_SECRET"]
    end
    # search
    tweets = client.search( args[:query], lang: args[:lang] ).take( args[:count].to_i )
    tweets.each do |t|
      puts "Writing '#{t.text}' to database"
      Tweet.create :content => t.text
    end

  end
end
