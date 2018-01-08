namespace :db do
  desc "drop create migerate and seed the dtabase"
  task :regenerate do
    Rake::Task['db:drop'].invoke
    Rake::Task['db:create'].invoke
    Rake::Task['db:migrate'].invoke
    Rake::Task['db:seed'].invoke
  end
end
