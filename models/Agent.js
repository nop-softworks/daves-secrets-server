const mongoose = require("mongoose");

const AgentSchema = new mongoose.Schema(
  {
    user_type: {
      type: String,
      default: "user", //user, system, application
    },
    user_tier: {
      type: String,
      default: "free", //free, premium, trial, enterprise
    },
    first_name: {
      type: String,
      default: "",
    },
    middle_name: {
      type: String,
      default: "",
    },
    last_name: {
      type: String,
      default: "",
    },
    password: String,
    token: String,
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
      default: "",
    },
    api_enabled: {
      type: Boolean,
      default: false,
    },
    agent_pbkdf: {
      salt: {
        type: String,
        default: "",
      },
      key: {
        type: String,
        default: "",
      },
    },
    agent_secret_key_encrypted: {
      type: String, //encrypted by password
      default: "",
    },
    agent_secret_key_hashed: {
      type: String, //hashed
      default: "",
    },
    auth_tokens: {
      type: [
        {
          token_type: {
            type: String,
            default: "application", //application, api,
          },
          token_key: String, //hashed key
          content: String, //encrypted content
        },
      ],
      default: [],
    },
    env_files: {
      type: [
        {
          env_id: mongoose.Schema.Types.ObjectId,
          key: String, //encrypted by agent key
        },
      ],
      default: [],
    },
    organization_id: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
    allow_email_notifications: {
      type: Boolean,
      default: false,
    },
    allow_sms_notifications: {
      type: Boolean,
      default: false,
    },
    enable_multi_factor: {
      type: Boolean,
      default: false,
    },
    encryption_queue: {
      //To add Env keys after authentication
      type: [
        {
          env_id: mongoose.Schema.Types.ObjectId,
          key: String,
        },
      ],
      default: [],
    },
    api: {
      type: mongoose.Schema.Types.Mixed,
      default: null,
    },
    additional_data: {
      type: mongoose.Schema.Types.Mixed,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Agent", AgentSchema, "Agent");
