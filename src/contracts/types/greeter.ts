/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/greeter.json`.
 */
export type Greeter = {
  "address": "6F4B6DAf1K5kFY4JjKcDTfyQbGTK4yeTtbMEiXeAjZBj",
  "metadata": {
    "name": "greeter",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "setGreeting",
      "discriminator": [
        63,
        232,
        53,
        234,
        129,
        147,
        78,
        101
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "greetingAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  114,
                  101,
                  101,
                  116,
                  105,
                  110,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "greeting",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "greetingData",
      "discriminator": [
        89,
        205,
        110,
        102,
        218,
        222,
        15,
        130
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "greeterZeroLengthGreeting",
      "msg": "Greeting string can't be empty"
    }
  ],
  "types": [
    {
      "name": "greetingData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "greeting",
            "type": "string"
          }
        ]
      }
    }
  ],
  "constants": [
    {
      "name": "greetingAccountSeedPhrase",
      "type": "bytes",
      "value": "[103, 114, 101, 101, 116, 105, 110, 103]"
    }
  ]
};
