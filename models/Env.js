const mongoose = require("mongoose");

const EnvSchema = new mongoose.Schema(
  {
    env_name: {
      type: String,
      default: "",
    },
    env_type: {
      type: String,
      default: "generic",
    },
    encrypted_content: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    tags: {
      type: [String],
      default: [],
    },
    master_key: {
      //to be hashed by either owner-agent or organization
      type: String,
      default: "",
    },
    application_access_list: {
      type: [String],
      default: [],
    },
    use_application_access_list: {
      type: Boolean,
      default: false,
    },
    device_access_list: {
      type: [String],
      default: [],
    },
    use_device_access_list: {
      type: Boolean,
      default: false,
    },
    ip_access_list: {
      type: [String],
      default: [],
    },
    use_ip_access_list: {
      type: Boolean,
      default: false,
    },
    use_organization_settings: {
      type: Boolean,
      default: false,
    },
    owner_agent_id: {
      type: mongoose.Types.ObjectId,
      default: null,
    },
    access_agent_id: {
      type: [mongoose.Types.ObjectId],
      default: [],
      ref: "Agent",
    },
    organization_id: {
      type: mongoose.Types.ObjectId,
      default: null,
    },
    api: {
      type: mongoose.Types.Mixed,
      default: null,
    },
    additional_data: {
      type: mongoose.Types.Mixed,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Env", EnvSchema, "Env");