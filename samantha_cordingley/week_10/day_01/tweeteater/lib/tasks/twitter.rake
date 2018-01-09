#adding => :environment means go load all of rails if you need to access a model or similar in the task
#using times block to run the user function multiple times
# args[:user_count].to_i.times do
#   User.create :email => 'tony@ga.co'
# end

namespace :twitter do
  desc "Removes all Users and Tweets from the database"
  task :clear => :environment do
    User.destroy_all
    Tweet.destroy_all
    Rake::Task['twitter:stats'].invoke
  end

  desc "Current amount of users and tweets"
  task :stats => :environment do
    puts "Users: #{User.count}, Tweets: #{Tweet.count}"
  end

  desc "Populates the Tweet and User tables with Faker data"
  task :populate, [:user_count] => :environment do |t, args|
    args[:user_count].to_i.times do
      user = User.create :email => Faker::Internet.email
      rand(1..50).times do
        user.tweets.create :content => Faker::Lovecraft.sentence # the same as Tweet.create but it also handles the asscioations and assigns it to the user
      end
    end
    Rake::Task['twitter:stats'].invoke
  end

  desc "Populate the tweet table with real life data from twitter"
  task :search, [:query, :count] => :environment do |t, args|
    puts "Searching Twitter for #{args[:count]} tweets mentioning #{args[:query]}"
    # Your code (mostly) goes here (do not worry about users)
    $client.search(args[:query], result_type: "recent").take(args[:count].to_i).collect do |tweet|
      Tweet.create :content => tweet.text
    end
  end
end
