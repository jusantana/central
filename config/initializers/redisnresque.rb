ENV['REDIS_URL'] = 'redis://localhost:6379/0'
if ENV['REDISCLOUD_URL']
  ENV['REDIS_URL'] = ENV['REDISCLOUD_URL']
  uri = URI.parse(ENV['REDISCLOUD_URL'])
  $redis = Redis.new(host: uri.host, port: uri.port, password: uri.password)
  Resque.redis = $redis
end
Resque::Scheduler.dynamic = true
