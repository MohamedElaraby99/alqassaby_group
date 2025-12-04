module.exports = {
  apps: [{
    name: 'elkassaby-frontend',
    script: '.next/standalone/server.js',
    cwd: '/var/www/elqassaby/alqassaby_group/frontend',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 3020
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    // Wait for app to be ready
    listen_timeout: 10000,
    kill_timeout: 5000
  }]
}

