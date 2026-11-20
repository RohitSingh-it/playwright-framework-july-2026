const data = {
  "username": "admin_user",
  "company": {
    "name": "Acme Corp",
    "owner": {
      "username": "owner_ravi"
    },
    "departments": [
      {
        "name": "QA",
        "lead": {
          "username": "lead_priya"
        },
        "members": [
          {
            "username": "qa_arjun",
            "role": "SDET"
          },
          {
            "username": "qa_sneha",
            "role": "SDET-II"
          }
        ]
      },
      {
        "name": "Dev",
        "members": [
          {
            "username": "dev_kiran"
          }
        ]
      }
    ]
  },
  "audit": {
    "lastModifiedBy": {
      "username": "sys_bot"
    },
    "usernames": [
      "should_not_match"
    ]
  }
};

function getUsernames(obj, result = []) {
  if (Array.isArray(obj)) {
    for (const item of obj) {
      getUsernames(item, result);
    }
  } else if (obj !== null && typeof obj === "object") {
    for (const key in obj) {
      if (key === "username") {
        result.push(obj[key]);
      } else {
        getUsernames(obj[key], result);
      }
    }
  }

  return result;
}

console.log(getUsernames(data));