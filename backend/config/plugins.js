module.exports = ({ env }) => {
  return {
    upload: {
      config: {
        provider: "strapi-provider-firebase-storage",
        providerOptions: {
          // @ts-ignore
          serviceAccount: require("./serviceAccount.json"),
          // Custom bucket name
          bucket: env(
            "STORAGE_BUCKET_URL",
            "ecommerce-2775d.appspot.com"
          ),
          sortInStorage: true, // true | false
          debug: false, // true | false
        },
      },
    },
  };
};
