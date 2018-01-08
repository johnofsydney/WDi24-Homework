namespace :twitter do
  desc "this pops tweet and user tables with faker data"
  task :populate, [:user_count] => :environment do |t, args|
    # puts "creating #{ args[:user_count] users }"
    args[:user_count].to_i.times do
      user = User.create :email_address => Faker::Internet.email
      rand(1..50).times do
        user.tweets.create :content => Faker::Lovecraft.sentence
      end
    end
  end

  desc "clears data"
  task :clear => :environment do
    User.destroy_all
    Tweet.destroy_all
    Rake::Task['twitter:stats'].invoke
  end

  task :stats => :environment do
    puts "Users #{User.count}, Tweets #{Tweet.count}"
  end



  desc "search twitter and retreive data"
  task :search, [:query, :count] => :environment do |t, args|
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = Rails.application.secrets.consumer_key
      config.consumer_secret     = Rails.application.secrets.consumer_secret
      config.access_token        = Rails.application.secrets.access_token
      config.access_token_secret = Rails.application.secrets.access_token_secret
    end

    puts "searching for #{args[:count]} and #{args[:query]}"

    client.search(args[:query], result_type: "recent").take(args[:count].to_i).collect do |tweet|
      puts "#{tweet.user.screen_name}: #{tweet.text}"
      Tweet.create :content => "#{tweet.user.screen_name}: #{tweet.text}"
    end



  end
end
