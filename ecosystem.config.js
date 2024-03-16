module.exports = {
  apps: [
    {
      name: "NESTJS-USER",
      exec_mode: "cluster",
      instances: "1", // Or a number of instances
      script: "node_modules/next/dist/bin/next",
      args: "start -p 4000",
      env_local: {
        APP_ENV: "local", // APP_ENV=local
      },
      env_dev: {
        APP_ENV: "dev", // APP_ENV=dev
      },
      env_prod: {
        APP_ENV: "prod", // APP_ENV=prod
      },
    },
  ],
};
