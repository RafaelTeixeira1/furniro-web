const React = require("react");

module.exports = {
  ClerkProvider: ({ children }) => React.createElement("div", null, children),
  SignedIn: ({ children }) => React.createElement("div", null, children),
  SignedOut: () => null,
  useUser: () => ({
    isSignedIn: true,
    user: { id: "test_user_id", emailAddresses: [{ emailAddress: "test@example.com" }] },
  }),
};
