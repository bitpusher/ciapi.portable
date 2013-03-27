exports.schema = 


{
    "namespace": "CIAPI.Portable.Model",
    "version": "0.111.0.0",
    "properties": {
        "AccountInformationResponseDTO": {
            "id": "AccountInformationResponseDTO",
            "type": "object",
            "properties": {
                "LogonUserName": {
                    "type": "string",
                    "description": "Logon user name."
                },
                "ClientAccountId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Client account ID."
                },
                "ClientAccountCurrency": {
                    "type": "string",
                    "description": "Base currency of the client account."
                },
                "AccountOperatorId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Account Operator ID."
                },
                "TradingAccounts": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiTradingAccountDTO"
                      }
                    ],
                    "description": "A list of trading accounts."
                },
                "PersonalEmailAddress": {
                    "type": "string",
                    "description": "The user's personal email address."
                },
                "HasMultipleEmailAddresses": {
                    "type": "boolean",
                    "description": "Flag indicating whether the user has more than one email address configured."
                }
            },
            "description": "Response from an account information query."
        },
        "ApiActiveStopLimitOrderDTO": {
            "id": "ApiActiveStopLimitOrderDTO",
            "type": "object",
            "properties": {
                "OrderId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The order's unique identifier."
                },
                "ParentOrderId": {
                    "type": [
                      "null",
                      "integer"
                    ],
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "This represents the OrderID of any orders that the current order is related to. If there is no parent order as the order in question *is* the parent order, then the value is null."
                },
                "MarketId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The markets unique identifier."
                },
                "MarketName": {
                    "type": "string",
                    "description": "The market's name."
                },
                "Direction": {
                    "type": "string",
                    "description": "The direction, buy or sell."
                },
                "Quantity": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The quantity of the product."
                },
                "TriggerPrice": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The marked to market price at which the order will trigger at."
                },
                "TradingAccountId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The trading account that the order is on."
                },
                "Type": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The type of order, i.e. stop or limit."
                },
                "Applicability": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "When the order applies until. i.e. good till cancelled (GTC) good for day (GFD) or good till time (GTT)."
                },
                "ExpiryDateTimeUTC": {
                    "type": [
                      "null",
                      "string"
                    ],
                    "format": "wcf-date",
                    "description": "The associated expiry DateTime."
                },
                "Currency": {
                    "type": "string",
                    "description": "The trade currency."
                },
                "Status": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The order status."
                },
                "StopOrder": {
                    "type": {
                        "$ref": "#.ApiBasicStopLimitOrderDTO"
                    },
                    "description": "The if / done stop order."
                },
                "LimitOrder": {
                    "type": {
                        "$ref": "#.ApiBasicStopLimitOrderDTO"
                    },
                    "description": "The if / done limit order."
                },
                "OcoOrder": {
                    "type": {
                        "$ref": "#.ApiBasicStopLimitOrderDTO"
                    },
                    "description": "The order on the other side of a One Cancels the Other relationship."
                },
                "LastChangedDateTimeUTC": {
                    "type": "string",
                    "format": "wcf-date",
                    "description": "Represents the date and time when the trade/order was last edited. **Note:** does not include things such as the current market price."
                }
            },
            "description": "A stop or limit order that is currently active."
        },
        "ApiBasicStopLimitOrderDTO": {
            "id": "ApiBasicStopLimitOrderDTO",
            "type": "object",
            "properties": {
                "Guaranteed": {
                    "type": "boolean",
                    "description": "Flag indicating if the stop order is a guaranteed order."
                },
                "OrderId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The order's unique identifier."
                },
                "TriggerPrice": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The order's trigger price."
                },
                "Quantity": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The quantity of the product."
                }
            },
            "description": "A stop or limit order with a limited number of data fields."
        },
        "ApiChangePasswordRequestDTO": {
            "id": "ApiChangePasswordRequestDTO",
            "type": "object",
            "properties": {
                "UserName": {
                    "type": "string",
                    "minLength": 6,
                    "maxLength": 20,
                    "description": "The username of the user whose password is to be changed *(case sensitive)*."
                },
                "Password": {
                    "type": "string",
                    "minLength": 6,
                    "maxLength": 20,
                    "description": "The user's existing password *(case sensitive)*."
                },
                "NewPassword": {
                    "type": "string",
                    "minLength": 6,
                    "maxLength": 20,
                    "description": "The user's new password *(case sensitive)*."
                }
            },
            "description": "Request to change a user's password."
        },
        "ApiChangePasswordResponseDTO": {
            "id": "ApiChangePasswordResponseDTO",
            "type": "object",
            "properties": {
                "IsPasswordChanged": {
                    "type": "boolean",
                    "description": "Flag indicating whether the password change request was successful."
                }
            },
            "description": "Response to a change password request."
        },
        "ApiClientAccountWatchlistDTO": {
            "id": "ApiClientAccountWatchlistDTO",
            "type": "object",
            "properties": {
                "WatchlistId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The ID of the Watchlist."
                },
                "WatchlistDescription": {
                    "type": "string",
                    "description": "Watchlist description."
                },
                "DisplayOrder": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Watchlist display order."
                },
                "Items": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiClientAccountWatchlistItemDTO"
                      }
                    ],
                    "description": "Watchlist items."
                }
            },
            "description": "Client account watchlist."
        },
        "ApiClientAccountWatchlistItemDTO": {
            "id": "ApiClientAccountWatchlistItemDTO",
            "type": "object",
            "properties": {
                "WatchlistId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "ID of the parent watchlist."
                },
                "MarketId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Watchlist item market ID."
                },
                "DisplayOrder": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Watchlist item display order."
                }
            },
            "description": "API watchlist item."
        },
        "ApiClientApplicationMessageTranslationDTO": {
            "id": "ApiClientApplicationMessageTranslationDTO",
            "type": "object",
            "properties": {
                "Key": {
                    "type": "string",
                    "description": "Translation key."
                },
                "Value": {
                    "type": "string",
                    "description": "Translation value."
                }
            },
            "description": "Message translation entity with client specific translated text strings."
        },
        "ApiClientApplicationMessageTranslationRequestDTO": {
            "id": "ApiClientApplicationMessageTranslationRequestDTO",
            "type": "object",
            "properties": {
                "ClientApplicationId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Client Id of requesting user."
                },
                "CultureId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Culture Id of requesting user."
                },
                "AccountOperatorId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Account Operator ID of requesting user"
                },
                "InterestedTranslationKeys": {
                    "type": "array",
                    "items": [
                      "string"
                    ],
                    "description": "A list of interesting keys to get translations for"
                }
            },
            "description": "A request to update a stop/limit order."
        },
        "ApiClientApplicationMessageTranslationResponseDTO": {
            "id": "ApiClientApplicationMessageTranslationResponseDTO",
            "type": "object",
            "properties": {
                "TranslationKeyValuePairs": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiClientApplicationMessageTranslationDTO"
                      }
                    ],
                    "description": "List of message translations *(key/value pairs)*."
                }
            },
            "description": "Gives a list of client application specific message translations."
        },
        "ApiCultureLookupDTO": {
            "id": "ApiCultureLookupDTO",
            "type": "object",
            "extends": "#.ApiLookupDTO",
            "properties": {
                "Code": {
                    "type": "string",
                    "description": "Two letter ISO 639 culture code followed by a two letter uppercase ISO 3166 culture code."
                }
            },
            "description": "Lookup data specific to a Culture."
        },
        "ApiDateTimeOffsetDTO": {
            "id": "ApiDateTimeOffsetDTO",
            "type": "object",
            "properties": {
                "UtcDateTime": {
                    "type": "string",
                    "format": "wcf-date",
                    "description": "Gets the date and time in UTC."
                },
                "OffsetMinutes": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Gets the time's offset from Coordinated Universal Time (UTC)."
                }
            },
            "description": "Contains DateTime represented as UTC time and time zone offset in minutes to convert back to local time."
        },
        "ApiDeleteWatchlistRequestDTO": {
            "id": "ApiDeleteWatchlistRequestDTO",
            "type": "object",
            "properties": {
                "WatchlistId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The ID of the watchlist to delete."
                }
            },
            "description": "Request to delete a watchlist."
        },
        "ApiDeleteWatchlistResponseDTO": {
            "id": "ApiDeleteWatchlistResponseDTO",
            "type": "object",
            "properties": {
                "Deleted": {
                    "type": "boolean",
                    "description": "Flag confirming whether the watchlist was deleted."
                }
            },
            "description": "Response from a request to delete a watchlist."
        },
        "ApiErrorResponseDTO": {
            "id": "ApiErrorResponseDTO",
            "type": "object",
            "properties": {
                "HttpStatus": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The intended HTTP status code. This will be the same value as the actual HTTP status code unless the QueryString contains *only200=true*. This is useful for JavaScript clients who can only read responses with status code 200."
                },
                "ErrorMessage": {
                    "type": "string",
                    "description": "This is a description of the ErrorMessage property."
                },
                "ErrorCode": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The error code."
                }
            },
            "description": "The response to an error condition."
        },
        "ApiIfDoneDTO": {
            "id": "ApiIfDoneDTO",
            "type": "object",
            "properties": {
                "Stop": {
                    "type": {
                        "$ref": "#.ApiStopLimitOrderDTO"
                    },
                    "description": "The price at which the stop order will be filled."
                },
                "Limit": {
                    "type": {
                        "$ref": "#.ApiStopLimitOrderDTO"
                    },
                    "description": "The price at which the limit order will be filled."
                }
            },
            "description": "Contains the If/Done stop and limit orders. An If/Done order is comprised of two separate orders linked together and requested as a single order. When the first order is executed, the second order becomes an active order. For example, attaching a stop/limit to a trade or order."
        },
        "ApiIfDoneResponseDTO": {
            "id": "ApiIfDoneResponseDTO",
            "type": "object",
            "properties": {
                "Stop": {
                    "type": {
                        "$ref": "#.ApiOrderResponseDTO"
                    },
                    "description": "The Stop order response."
                },
                "Limit": {
                    "type": {
                        "$ref": "#.ApiOrderResponseDTO"
                    },
                    "description": "The Limit order response."
                }
            },
            "description": "Response to an If/Done order request."
        },
        "ApiLogOffRequestDTO": {
            "id": "ApiLogOffRequestDTO",
            "type": "object",
            "properties": {
                "UserName": {
                    "type": "string",
                    "description": "User name of the session to delete *(log off)*. This is case sensitive."
                },
                "Session": {
                    "type": "string",
                    "description": "Session identifier *(session token)* to delete *(log off)*."
                }
            },
            "description": "Request to delete a session *(log off)*."
        },
        "ApiLogOffResponseDTO": {
            "id": "ApiLogOffResponseDTO",
            "type": "object",
            "properties": {
                "LoggedOut": {
                    "type": "boolean",
                    "description": "Flag indicating the Log Out status."
                }
            },
            "description": "Response from a session delete *(Log Out)* request."
        },
        "ApiLogOnRequestDTO": {
            "id": "ApiLogOnRequestDTO",
            "type": "object",
            "properties": {
                "UserName": {
                    "type": "string",
                    "minLength": 6,
                    "maxLength": 20,
                    "description": "Username is case sensitive."
                },
                "Password": {
                    "type": "string",
                    "minLength": 6,
                    "maxLength": 20,
                    "description": "Password is case sensitive."
                },
                "AppKey": {
                    "type": "string",
                    "description": "A unique key to identify the client application."
                },
                "AppVersion": {
                    "type": "string",
                    "description": "The version of the client application."
                },
                "AppComments": {
                    "type": "string",
                    "description": "Any client application comments on what to associate with this session. *(Optional)*."
                }
            },
            "description": "Request to create a session *(log on)*."
        },
        "ApiLogOnResponseDTO": {
            "id": "ApiLogOnResponseDTO",
            "type": "object",
            "properties": {
                "Session": {
                    "type": "string",
                    "minLength": 36,
                    "maxLength": 100,
                    "description": "Your session token *(treat as a random string)*. Session tokens are valid for a set period from the time of their creation. The period is subject to change, and may vary depending on who you logon as."
                },
                "PasswordChangeRequired": {
                    "type": "boolean",
                    "description": "Flag used to indicate whether a password change is needed."
                },
                "AllowedAccountOperator": {
                    "type": "boolean",
                    "description": "Flag used to indicate whether the account operator associated with this user is allowed to access the application."
                }
            },
            "description": "Response to a [LogOn](http://labs.cityindex.com/docs/Content/HTTP%20Services/LogOn.htm) call."
        },
        "ApiLookupDTO": {
            "id": "ApiLookupDTO",
            "type": "object",
            "properties": {
                "Id": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The lookup ID."
                },
                "Description": {
                    "type": "string",
                    "description": "Lookup items description."
                },
                "DisplayOrder": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The order to display the items on a user interface."
                },
                "TranslationTextId": {
                    "type": [
                      "null",
                      "integer"
                    ],
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Translation text ID."
                },
                "TranslationText": {
                    "type": "string",
                    "description": "Translated text."
                },
                "IsActive": {
                    "type": "boolean",
                    "description": "Is active flag."
                },
                "IsAllowed": {
                    "type": "boolean",
                    "description": "Is allowed flag."
                }
            },
            "description": "Generic look up data entities - such as localised text names."
        },
        "ApiLookupResponseDTO": {
            "id": "ApiLookupResponseDTO",
            "type": "object",
            "properties": {
                "CultureId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The requested culture ID."
                },
                "LookupEntityName": {
                    "type": "string",
                    "description": "The requested lookup name."
                },
                "ApiLookupDTOList": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiLookupDTO"
                      }
                    ],
                    "description": "List of lookup entities from the database."
                },
                "ApiCultureLookupDTOList": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiCultureLookupDTO"
                      }
                    ],
                    "description": "List of entities each containing data specific to a culture."
                }
            },
            "description": "Gets the lookup entities from trading database given the lookup name and culture ID."
        },
        "ApiMarketDTO": {
            "id": "ApiMarketDTO",
            "type": "object",
            "properties": {
                "MarketId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "A market's unique identifier."
                },
                "Name": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 120,
                    "description": "The market name."
                }
            },
            "description": "Basic information about a Market."
        },
        "ApiMarketEodDTO": {
            "id": "ApiMarketEodDTO",
            "type": "object",
            "properties": {
                "MarketEodUnit": {
                    "type": "string",
                    "description": "Unit."
                },
                "MarketEodAmount": {
                    "type": [
                      "null",
                      "integer"
                    ],
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "End of day amount."
                }
            },
            "description": "Market end of day (EOD) information."
        },
        "ApiMarketInformationDTO": {
            "id": "ApiMarketInformationDTO",
            "type": "object",
            "properties": {
                "MarketId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The ID of the market."
                },
                "Name": {
                    "type": "string",
                    "description": "The market name."
                },
                "ExchangeId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Unique identifier for the exchange where the underlying is traded."
                },
                "ExchangeName": {
                    "type": "string",
                    "description": "The name of the exchange where the underlying is traded."
                },
                "MarginFactor": {
                    "type": [
                      "null",
                      "number"
                    ],
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Margin factor, expressed as points or as a percentage."
                },
                "MinMarginFactor": {
                    "type": [
                      "null",
                      "number"
                    ],
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The minimum margin factor."
                },
                "MarginFactorUnits": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Controls if the margin factor is displayed as a percentage or in points. *(Percentage=26, and Points=27)*."
                },
                "MaxMarginFactor": {
                    "type": [
                      "null",
                      "number"
                    ],
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The maximum margin factor."
                },
                "MarketType": {
                    "type": "string",
                    "description": "Description of the market type. This can be 'OptionMarket', 'Ordinary Market', or 'BinaryMarket'."
                },
                "MarketTypeId": {
                    "type": "integer",          
                    "description": "Identifier for each of the market types. *(Option=1, Ordinary=2 and Binary=4)*. "
                },
                "MinDistance": {
                    "type": [
                      "null",
                      "number"
                    ],
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The minimum distance from the current price you can place an order."
                },
                "MinDistanceUnits": {
                    "type": "integer",
                    "description": "The minimum distance unit type. This can be: *(Percentage=26, Points=27)*."
                },
                "OptionType": {
                    "type": "string",
                    "description": "Indicates if the option is a Call or a Put option."
                },
                "OptionTypeId": {
                    "type": [
                      "null",
                      "integer"
                    ],
                    "description": "ID number indicating the option type: *Put=1* and *Call=2*. This value is null for non-option markets."
                },
                "StrikePrice": {
                    "type": [
                      "null",
                      "integer"
                    ],
                    "description": "The strike price of the option. This value is null for non-option markets."
                },
                "WebMinSize": {
                    "type": [
                      "null",
                      "number"
                    ],
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The minimum quantity that can be traded over the web."
                },
                "MaxSize": {
                    "type": [
                      "null",
                      "number"
                    ],
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The max size of an order."
                },
                "Market24H": {
                    "type": "boolean",
                    "description": "Flag indicating whether the market is a 24 hour market."
                },
                "PriceDecimalPlaces": {
                    "type": [
                      "null",
                      "integer"
                    ],
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The number of decimal places in the market's price."
                },
                "DefaultQuoteLength": {
                    "type": [
                      "null",
                      "integer"
                    ],
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Default quote length."
                },
                "TradeOnWeb": {
                    "type": "boolean",
                    "description": "Flag indicating whether you can trade this market on the web."
                },
                "LimitUp": {
                    "type": "boolean",
                    "description": "New sell orders will be rejected. Orders resulting in a short open position will be red carded."
                },
                "LimitDown": {
                    "type": "boolean",
                    "description": "New buy orders will be rejected. Orders resulting in a long open position will be red carded."
                },
                "LongPositionOnly": {
                    "type": "boolean",
                    "description": "Cannot open a short position. Equivalent to limit up."
                },
                "CloseOnly": {
                    "type": "boolean",
                    "description": "Can only close open positions. Equivalent to both Limit up and Limit down."
                },
                "MarketEod": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiMarketEodDTO"
                      }
                    ],
                    "description": "List of market end of day DTOs."
                },
                "PriceTolerance": {
                    "type": [
                      "null",
                      "number"
                    ],
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Setting to indicate the user's price tolerance for the given market."
                },
                "ConvertPriceToPipsMultiplier": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Multiplier used to calculate the significance of the price tolerance to the appropriate decimal place."
                },
                "MarketSettingsTypeId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The ID type of the market setting. *(Spread=1, CFD=2, Binary=3, FX=4, Cash=5, All=6)*."
                },
                "MarketSettingsType": {
                    "type": "string",
                    "description": "The type of the market setting, i.e. Spread, CFD."
                },
                "MobileShortName": {
                    "type": "string",
                    "description": "A short summary of the market name used when presenting the market name on mobile clients."
                },
                "CentralClearingType": {
                    "type": "string",
                    "description": "The method used for central clearing, i.e. \"No\" or \"LCH\"."
                },
                "CentralClearingTypeDescription": {
                    "type": "string",
                    "description": "The description of the method used for central clearing, i.e. \"None\" or \"London Clearing House\"."
                },
                "MarketCurrencyId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The currency of the market being traded."
                },
                "PhoneMinSize": {
                    "type": [
                      "null",
                      "number"
                    ],
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The minimum quantity that can be traded over the Phone."
                },
                "DailyFinancingAppliedAtUtc": {
                    "type": [
                      "null",
                      "string"
                    ],
                    "format": "wcf-date",
                    "description": "Daily financing amount to be applied at specified time in UTC."
                },
                "NextMarketEodTimeUtc": {
                    "type": [
                      "null",
                      "string"
                    ],
                    "format": "wcf-date",
                    "description": "Next Date and Time at which the End of Day (EOD) capture will run in UTC."
                },
                "TradingStartTimeUtc": {
                    "type": [
                      "null",
                      "string"
                    ],
                    "format": "wcf-date",
                    "description": "Market Trading start time on each trading day represented in UTC and local time."
                },
                "TradingEndTimeUtc": {
                    "type": [
                      "null",
                      "string"
                    ],
                    "format": "wcf-date",
                    "description": "Market Trading end time on each trading day represented in UTC and local time."
                },
                "MarketPricingTimes": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiTradingDayTimesDTO"
                      }
                    ],
                    "description": "Market Pricing times on given set of working days."
                },
                "MarketBreakTimes": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiTradingDayTimesDTO"
                      }
                    ],
                    "description": "Breaks throughout each trading day *(Day is specified as 'DayOfWeek')*."
                },
                "MarketSpreads": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiMarketSpreadDTO"
                      }
                    ],
                    "description": "Market spreads during each trading day."
                },
                "GuaranteedOrderPremium": {
                    "type": [
                      "null",
                      "number"
                    ],
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The premium paid for a guaranteed order."
                },
                "GuaranteedOrderPremiumUnits": {
                    "type": [
                      "null",
                      "integer"
                    ],
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The unit type being used for the guaranteed order premium. This can be *(MultipleOfQuantity=1, PercentOfConsideration=2)*."
                },
                "GuaranteedOrderMinDistance": {
                    "type": [
                      "null",
                      "number"
                    ],
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The minimum distance from current market price at which a guaranteed order can be placed."
                },
                "GuaranteedOrderMinDistanceUnits": {
                    "type": [
                      "null",
                      "integer"
                    ],
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Guaranteed order minimum distance unit type. This can be: *(Percentage=26, Points=27)*."
                },
                "PriceToleranceUnits": {
                    "type": [
                      "null",
                      "number"
                    ],
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Price tolerance units - used with Price Tolerance as a multiplier *(i.e. BetPer or Override Bet Per)*."
                },
                "MarketTimeZoneOffsetMinutes": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Offset minutes to convert UTC times to local times."
                },               
                "QuantityConversionFactor": {
                    "type": [
                      "null",
                      "number"
                    ],
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The number of units for an instrument per actual traded units."
                },
                "PointFactorDivisor": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The number of cents which make up a dollar trade on the exchange."
                },
                "BetPer": {
                    "type": [
                      "null",
                      "number"
                    ],
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Bet Per value for CFD and Spread Bet markets."
                },
                "MarketUnderlyingTypeId": {
                    "type": [
                      "null",
                      "integer"
                    ],
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Reflects the market underlying type ID of the associated market. <ul> <li>Equity=1</li> <li>Index=2</li> <li>Bond=3</li> <li>FX=4</li> <li>Commodity=5</li> <li>Interest Rate=6</li> <li>Metals=7</li> <li>Equity - Common Stock=8</li> <li>Equity - ADS=9</li> <li>Binary=10</li> <li>Sectors=11</li> <li>FX Hedge=12</li> </ul>"
                },
                "MarketUnderlyingType": {
                    "type": "string",
                    "description": "Reflects the market underlying type description of the associated market."
                },
                "AllowGuaranteedOrders": {
                    "type": "boolean",
                    "description": "Flag indicating whether guaranteed orders are allowed."
                },
                "OrdersAwareMargining": {
                    "type": "boolean",
                    "description": "Flag to indicate if stop orders are allowed for inclusion in margin calculation."
                },       
                "OrdersAwareMarginingMinimum": {
                    "type": [
                      "null",
                      "number"
                    ],
                    "format": "decimal",
                    "description": "The minimum for orders aware margining."
                },
                "CommissionChargeMinimum": {
                    "type": [
                      "null",
                      "number"
                    ],
                    "format": "decimal",
                    "description": "The minimum commission charged on trade/order."
                },
                "CommissionRate": {
                    "type": [
                      "null",
                      "number"
                    ],
                    "format": "decimal",
                    "description": "The commission rate charged on trade/order."
                },
                "CommissionRateUnits": {
                    "type": [
                      "null",
                      "integer"
                    ],
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The unit type for the commission rate charged on a trade/order. This can be: <ul> <li>Minimum commission for equities - 11</li> <li>Equities commission rate in basis points - 12</li> <li>Commission for indices - 17</li> <li>Equities commission rate in Cents Per Share - 23</li> </ul>"
                },
                "ExpiryUtc": {
                    "type": [
                      "null",
                      "string"
                    ],
                    "format": "wcf-date",
                    "description": "Expiry of the market in UTC."
                },
                "StepMargin": {
                    "type":   { 
                        "$ref": "#.ApiStepMarginDTO"           
                    },         
                    "description": "Step margin data for this market."
                },
                "FutureRolloverUTC": {
                    "type": [
                      "null",
                      "string"
                    ],
                    "format": "wcf-date",
                    "description": "The date and time in UTC for the future rollover of the market."
                },
                "AllowRollover": {
                    "type": "boolean",
                    "description": "Flag to indicate if auto-rollover on the market is allowed."
                }, 
                "ExpiryBasisId": {
                    "type": [
                      "null",
                      "integer"
                    ],
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The expiry basis ID of the market."
                },
                "ExpiryBasisText": {
                    "type": "string",
                    "description": "The expiry basis text of the market."
                },
            },
            "description": "Contains market information."
        },
        "ApiMarketInformationSaveDTO": {
            "id": "ApiMarketInformationSaveDTO",
            "type": "object",
            "properties": {
                "MarketId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The ID of the market to be modified."
                },
                "PriceTolerance": {
                    "type": [
                      "null",
                      "number"
                    ],
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Setting to indicate the user's price tolerance for the given market."
                },
                "PriceToleranceIsDirty": {
                    "type": "boolean",
                    "description": "Flag to indicate if the price tolerance value has changed."
                },
                "MarginFactor": {
                    "type": [
                      "null",
                      "number"
                    ],
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The user's margin factor for the given market."
                },
                "MarginFactorIsDirty": {
                    "type": "boolean",
                    "description": "Flag to indicate if the margin factor value has changed."
                }
            },
            "description": "Contains market information to be modified and saved."
        },
        "ApiMarketSpreadDTO": {
            "id": "ApiMarketSpreadDTO",
            "type": "object",
            "properties": {
                "SpreadTimeUtc": {
                    "type": [
                      "null",
                      "string"
                    ],
                    "format": "wcf-date",
                    "description": "The time and date in for the spread value in UTC, interchangeable to local time using local time offset."
                },
                "Spread": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The market spread value."
                },
                "SpreadUnits": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The market spread value's unit type."
                }
            },
            "description": "Contains market spread value at specific time points."
        },
        "ApiMarketTagDTO": {
            "id": "ApiMarketTagDTO",
            "type": "object",
            "properties": {
                "MarketTagId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "A unique identifier for this market tag."
                },
                "Name": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 120,
                    "description": "The market tag description. Can be localised if required."
                },
                "Type": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "minLength": 1,
                    "maxLength": 1,
                    "description": "Used to determine if the market tag is a primary (1) or secondary (2) tag."
                }
            },
            "description": "Basic information about a market tag."
        },
        "ApiOpenPositionDTO": {
            "id": "ApiOpenPositionDTO",
            "type": "object",
            "properties": {
                "OrderId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The order's unique identifier."
                },
                "AutoRollover": {
                    "type": "boolean",
                    "description": "Flag to indicate whether the trade will automatically roll into the next market interval when the current market interval expires."
                },
                "MarketId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The market's unique identifier."
                },
                "MarketName": {
                    "type": "string",
                    "description": "The market's name."
                },
                "Direction": {
                    "type": "string",
                    "description": "The direction, buy or sell."
                },
                "Quantity": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The quantity of the order."
                },
                "Price": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The price / rate that the trade was opened at."
                },
                "TradingAccountId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The ID of the trading account that the order is on."
                },
                "Currency": {
                    "type": "string",
                    "description": "The trade currency."
                },
                "Status": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The order status."
                },
                "StopOrder": {
                    "type": {
                        "$ref": "#.ApiBasicStopLimitOrderDTO"
                    },
                    "description": "The stop order attached to this order."
                },
                "LimitOrder": {
                    "type": {
                        "$ref": "#.ApiBasicStopLimitOrderDTO"
                    },
                    "description": "The limit order attached to this order."
                },
                "LastChangedDateTimeUTC": {
                    "type": "string",
                    "format": "wcf-date",
                    "description": "Represents the date and time when the trade/order was last edited. **Note:** does not include things such as the current market price."
                }
            },
            "description": "A trade, or order that is currently open."
        },
        "ApiOrderActionResponseDTO": {
            "id": "ApiOrderActionResponseDTO",
            "type": "object",
            "properties": {
                "ActionedOrderId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Actioned Order ID."
                },
                "ActioningOrderId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Actioning Order ID."
                },
                "Quantity": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Quantity."
                },
                "ProfitAndLoss": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Profit or Loss."
                },
                "ProfitAndLossCurrency": {
                    "type": "string",
                    "description": "Profit or Loss Currency."
                },
                "OrderActionTypeId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Order Action Type."
                }
            },
            "description": "Response to an order request."
        },
        "ApiOrderDTO": {
            "id": "ApiOrderDTO",
            "type": "object",
            "properties": {
                "OrderId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The order identifier."
                },
                "AutoRollover": {
                    "type": "boolean",
                    "description": "Flag to indicate whether the trade will automatically roll into the next market interval when the current market interval expires."
                },
                "MarketId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "A market's unique identifier."
                },
                "Direction": {
                    "type": "string",
                    "description": "Direction identifier for trade, values supported are buy or sell."
                },
                "Quantity": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Size of the order."
                },
                "Price": {
                    "type": [
                      "null",
                      "number"
                    ],
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The price at which the order was filled."
                },
                "TradingAccountId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The ID of the Trading Account associated with the order."
                },
                "CurrencyId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Currency ID for order *(as represented in the trading system)*."
                },
                "StatusId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Status ID of order *(as represented in the trading system)*."
                },
                "TypeId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The type of the order, Trade, stop or limit."
                },
                "IfDone": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiIfDoneDTO"
                      }
                    ],
                    "description": "List of If/Done Orders which will be filled when the initial order is triggered."
                },
                "OcoOrder": {
                    "type": {
                        "$ref": "#.ApiStopLimitOrderDTO"
                    },
                    "description": "Corresponding OCO Order (One Cancels the Other)."
                }
            },
            "description": "Represents an order."
        },
        "ApiOrderResponseDTO": {
            "id": "ApiOrderResponseDTO",
            "type": "object",
            "properties": {
                "OrderId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Order ID."
                },
                "StatusReason": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Order status reason ID."
                },
                "Status": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Order status ID."
                },
                "OrderTypeId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Order type ID."
                },
                "Price": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Order fill price."
                },
                "Quantity": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Order quantity"
                },
                "TriggerPrice": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Trigger price, if applicable"
                },
                "CommissionCharge": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Commission charge."
                },
                "IfDone": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiIfDoneResponseDTO"
                      }
                    ],
                    "description": "List of If/Done orders."
                },
                "GuaranteedPremium": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Premium for guaranteed orders."
                },
                "OCO": {
                    "type": {
                        "$ref": "#.ApiOrderResponseDTO"
                    },
                    "description": "An order in an OCO relationship with this order."
                }
            },
            "description": "Response to an order request."
        },
        "ApiPrimaryMarketTagDTO": {
            "id": "ApiPrimaryMarketTagDTO",
            "type": "object",
            "extends": "#.ApiMarketTagDTO",
            "properties": {
                "Children": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiMarketTagDTO"
                      }
                    ],
                    "description": "The list of child tags associated with this market tag."
                }
            },
            "description": "Market tag information extended to include a list of child tags."
        },
        "ApiQuoteResponseDTO": {
            "id": "ApiQuoteResponseDTO",
            "type": "object",
            "properties": {
                "QuoteId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Quote ID."
                },
                "Status": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Quote status."
                },
                "StatusReason": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Quote status reason."
                }
            },
            "description": "Quote response."
        },
        "ApiSaveAccountInformationRequestDTO": {
            "id": "ApiSaveAccountInformationRequestDTO",
            "type": "object",
            "properties": {
                "PersonalEmailAddress": {
                    "type": "string",
                    "description": "The personal email address for the user."
                },
                "PersonalEmailAddressIsDirty": {
                    "type": "boolean",
                    "description": "Setting to indicate if the personal email value has changed."
                }
            },
            "description": "Request to change account information."
        },
        "ApiSaveAccountInformationResponseDTO": {
            "id": "ApiSaveAccountInformationResponseDTO",
            "type": "object",
            "properties": {},
            "description": "An *(empty)* response to indicate that the save account information operation has completed."
        },
        "ApiSaveMarketInformationResponseDTO": {
            "id": "ApiSaveMarketInformationResponseDTO",
            "type": "object",
            "properties": {},
            "description": "An *(empty)* response to indicate that the save market information operation has completed."
        },
        "ApiSaveWatchlistRequestDTO": {
            "id": "ApiSaveWatchlistRequestDTO",
            "type": "object",
            "properties": {
                "Watchlist": {
                    "type": {
                        "$ref": "#.ApiClientAccountWatchlistDTO"
                    },
                    "description": "The watchlist to save. This will update an existing watchlist; or when the watchlistId is omitted or 0 is supplied, it will create a new watchlist."
                }
            },
            "description": "Request to save a watchlist."
        },
        "ApiSaveWatchlistResponseDTO": {
            "id": "ApiSaveWatchlistResponseDTO",
            "type": "object",
            "properties": {},
            "description": "An *(empty)* response to indicate the save watchlist operation has completed."
        },
        "ApiSimulateOrderResponseDTO": {
            "id": "ApiSimulateOrderResponseDTO",
            "type": "object",
            "properties": {
                "StatusReason": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Simulated order status reason ID."
                },
                "Status": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Simulated order status ID."
                }
            },
            "description": "Simulated order response."
        },
        "ApiStepMarginDTO": {
            "id": "ApiStepMarginDTO",
            "type": "object",
            "properties": {
                "EligibleForStepMargin": {
                    "type": "boolean",
                    "description": "Flag indicating whether this market is eligible for step margin."
                },
                "StepMarginConfigured": {
                    "type": "boolean",
                    "description": "Flag indicating whether this market has step margin configured."
                },
                "InheritedFromParentAccountOperator": {
                    "type": "boolean",
                    "description": "Flag indicating whether this market's step margin configuration is inherited from a parent account operator."
                },
                "Bands": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiStepMarginBandDTO"
                      }
                    ],
                    "description": "The step margining bands used for this market / account operator."
                }
            },
            "description": "A market's step margin information as expressed by the TradingApi."
        },
        "ApiStepMarginBandDTO": {
            "id": "ApiStepMarginDTO",
            "type": "object",
            "properties": {
                "LowerBound": {
                    "type": "number",
                    "format": "decimal",
                    "description": "Minimum threshold for this band, expressed in terms of the client's trade quantity."
                },
                "MarginFactor": {
                    "type": "number",
                    "format": "decimal",
                    "description": "The margin factor that is used for this band. It can be expressed as a percentage or in points based on the market's margin factor type. "
                }
            },
            "description": "Represents a single step margin band as expressed by the TradingApi."
        },
        "ApiStopLimitOrderDTO": {
            "id": "ApiStopLimitOrderDTO",
            "type": "object",
            "extends": "#.ApiOrderDTO",
            "properties": {
                "Guaranteed": {
                    "type": "boolean",
                    "description": "Flag to determine whether an order is guaranteed to trigger and fill at the associated trigger price."
                },
                "TriggerPrice": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Price at which the order should be triggered."
                },
                "ExpiryDateTimeUTC": {
                    "type": [
                      "null",
                      "string"
                    ],
                    "format": "wcf-date",
                    "description": "The associated expiry DateTime for a pair of GoodTillDate If/Done orders."
                },
                "Applicability": {
                    "type": "string",
                    "description": "Identifier which relates to the expiry of the order/trade, i.e. GoodTillDate (GTD), GoodTillCancelled (GTC) or GoodForDay (GFD)."
                },
                "ParentOrderId": {
                    "type": [
                      "null",
                      "integer"
                    ],
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "This represents the OrderID of any orders that the current order is related to. If there is no parent order as the order in question *is* the parent order, then the value is null."
                },
                "LastChangedDateTimeUTC": {
                    "type": "string",
                    "format": "wcf-date",
                    "description": "Represents the date and time when the trade/order was last edited. **Note:** does not include things such as the current market price."
                }
            },
            "description": "Represents a stop/limit order."
        },
        "ApiStopLimitOrderHistoryDTO": {
            "id": "ApiStopLimitOrderHistoryDTO",
            "type": "object",
            "properties": {
                "OrderId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The order's unique identifier."
                },
                "MarketId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The markets unique identifier."
                },
                "MarketName": {
                    "type": "string",
                    "description": "The market's name."
                },
                "Direction": {
                    "type": "string",
                    "description": "The direction, buy or sell."
                },
                "OriginalQuantity": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The quantity of the order when it became a trade / was cancelled etc."
                },
                "Price": {
                    "type": [
                      "null",
                      "number"
                    ],
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The price / rate that the order was filled at."
                },
                "TriggerPrice": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The price / rate that the order was set to trigger at."
                },
                "TradingAccountId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The trading account that the order is on."
                },
                "TypeId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The type of the order stop, limit or trade."
                },
                "OrderApplicabilityId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The duration that the order was applicable, i.e. good till cancelled (GTC), good for day (GFD), or good till time (GTT)."
                },
                "Currency": {
                    "type": "string",
                    "description": "The trade currency."
                },
                "StatusId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The order status."
                },
                "LastChangedDateTimeUtc": {
                    "type": "string",
                    "format": "wcf-date",
                    "description": "Represents the date and time when the trade/order was last edited. **Note:** does not include things such as the current market price."
                },
                "CreatedDateTimeUtc": {
                    "type": "string",
                    "format": "wcf-date",
                    "description": "The creation date and time of the order."
                }
            },
            "description": "A stop or limit order from a historical perspective."
        },
        "ApiStopLimitResponseDTO": {
            "id": "ApiStopLimitResponseDTO",
            "type": "object",
            "extends": "#.ApiOrderResponseDTO",
            "properties": {},
            "description": "The response from the stop limit order request."
        },
        "ApiTradeHistoryDTO": {
            "id": "ApiTradeHistoryDTO",
            "type": "object",
            "properties": {
                "OrderId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The order ID."
                },
                "OpeningOrderIds": {
                    "type": "array",
                    "items": [
                      "integer"
                    ],
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The orders that are being closed / part closed by this order."
                },
                "MarketId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The market ID."
                },
                "MarketName": {
                    "type": "string",
                    "description": "The name of the market."
                },
                "Direction": {
                    "type": "string",
                    "description": "The direction of the trade."
                },
                "OriginalQuantity": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The original quantity of the trade, before part closures."
                },
                "Quantity": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The current quantity of the trade."
                },
                "Price": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The open price of the trade."
                },
                "TradingAccountId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The Trading Account ID that the order is on."
                },
                "Currency": {
                    "type": "string",
                    "description": "The trade currency."
                },
                "RealisedPnl": {
                    "type": [
                      "null",
                      "number"
                    ],
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The realised profit and loss (P&L)."
                },
                "RealisedPnlCurrency": {
                    "type": "string",
                    "description": "The realised P&L currency."
                },
                "LastChangedDateTimeUtc": {
                    "type": "string",
                    "format": "wcf-date",
                    "description": "Represents the date and time when the trade/order was last edited. **Note:** does not include things such as the current market price."
                },
                "ExecutedDateTimeUtc": {
                    "type": "string",
                    "format": "wcf-date",
                    "description": "The time that the order was executed."
                }
            },
            "description": "A Trade from a historical perspective."
        },
        "ApiTradeOrderDTO": {
            "id": "ApiTradeOrderDTO",
            "type": "object",
            "extends": "#.ApiOrderDTO",
            "properties": {
                "ParentOrderId": {
                    "type": [
                      "null",
                      "integer"
                    ],
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "This represents the OrderID of any orders that the current order is related to. If there is no parent order as the order in question *is* the parent order, then the value is null."
                },
                "LastChangedDateTimeUTC": {
                    "type": "string",
                    "format": "wcf-date",
                    "description": "Represents the date and time when the trade/order was last edited. **Note:** does not include things such as the current market price."
                }                            
            },
            "description": "Represents a trade order."
        },
        "ApiTradeOrderResponseDTO": {
            "id": "ApiTradeOrderResponseDTO",
            "type": "object",
            "properties": {
                "Status": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The status of the order *(Pending, Accepted, Open, etc.)*"
                },
                "StatusReason": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The ID corresponding to a more descriptive reason for the order status."
                },
                "OrderId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The unique identifier associated to the order returned from the underlying trading system."
                },
                "Orders": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiOrderResponseDTO"
                      }
                    ],
                    "description": "List of orders with their associated response."
                },
                "Quote": {
                    "type": {
                        "$ref": "#.ApiQuoteResponseDTO"
                    },
                    "description": "Quote response."
                },
                "Actions": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiOrderActionResponseDTO"
                      }
                    ],
                    "description": "List of order actions with their associated response."
                }
            },
            "description": "The response from the trade request."
        },
        "ApiTradingAccountDTO": {
            "id": "ApiTradingAccountDTO",
            "type": "object",
            "properties": {
                "TradingAccountId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Trading Account ID."
                },
                "TradingAccountCode": {
                    "type": "string",
                    "description": "Trading Account Code."
                },
                "TradingAccountStatus": {
                    "type": "string",
                    "description": "Trading account status with possible values *(Open, Closed)*."
                },
                "TradingAccountType": {
                    "type": "string",
                    "description": "Trading account type with possible values *(Spread, CFD)*."
                }
            },
            "description": "Information about a Trading Account."
        },
        "ApiTradingDayTimesDTO": {
            "id": "ApiTradingDayTimesDTO",
            "type": "object",
            "properties": {
                "DayOfWeek": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Day of the week at which the times are valid."
                },
                "StartTimeUtc": {
                    "type": {
                        "$ref": "#.ApiDateTimeOffsetDTO"
                    },
                    "description": "Start of the market time in both UTC and local time *(using Offset property)*."
                },
                "EndTimeUtc": {
                    "type": {
                        "$ref": "#.ApiDateTimeOffsetDTO"
                    },
                    "description": "End of the market time in both UTC and local time *(using Offset property)*."
                }
            },
            "description": "Contains start and end time information for market specific events such as trading and pricing."
        },
        "CancelOrderRequestDTO": {
            "id": "CancelOrderRequestDTO",
            "type": "object",
            "properties": {
                "OrderId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The order identifier."
                },
                "TradingAccountId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "ID of the trading account associated with the cancel order request."
                }
            },
            "description": "A cancel order request."
        },
        "ClientAccountMarginDTO": {
            "id": "ClientAccountMarginDTO",
            "type": "object",
            "properties": {
                "Cash": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Cash balance expressed in the clients base currency."
                },
                "Margin": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The client account's total margin requirement expressed in base currency."
                },
                "MarginIndicator": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Margin indicator expressed as a percentage."
                },
                "NetEquity": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Net equity expressed in the clients base currency."
                },
                "OpenTradeEquity": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Open trade equity *(open / unrealised PNL)* expressed in the client's base currency."
                },
                "TradeableFunds": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Tradable funds expressed in the client's base currency."
                },
                "PendingFunds": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "N/A"
                },
                "TradingResource": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Trading resource expressed in the client's base currency."
                },
                "TotalMarginRequirement": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Total margin requirement expressed in the client's base currency."
                },
                "CurrencyId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The clients base currency ID."
                },
                "CurrencyISO": {
                    "type": "string",
                    "description": "The clients base currency ISO code."
                }
            },
            "description": "The current margin and other account balance data for a specific client account used in the [ClientAccountMargin](http://labs.cityindex.com/docs/Content/Streaming%20Data/ClientAccountMargin.htm) stream."
        },
        "ClientPreferenceKeyDTO": {
            "id": "ClientPreferenceKeyDTO",
            "type": "object",
            "properties": {
                "Key": {
                    "type": "string",
                    "description": "A unique client preference key identifier."
                },
                "Value": {
                    "type": "string",
                    "description": "A value associated for the client preference key."
                }
            },
            "description": "Client preference key and value."
        },
        "ClientPreferenceRequestDTO": {
            "id": "ClientPreferenceRequestDTO",
            "type": "object",
            "properties": {
                "Key": {
                    "type": "string",
                    "description": "The client preference key to get."
                }
            },
            "description": "Get client preferences."
        },
        "DeleteWatchlistItemRequestDTO": {
            "id": "DeleteWatchlistItemRequestDTO",
            "type": "object",
            "properties": {
                "ParentWatchlistDisplayOrderId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The watchlist display order ID to delete the item from."
                },
                "MarketId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The market item to delete."
                }
            },
            "description": "Delete watchlist item."
        },
        "ErrorCode": {
            "id": "ErrorCode",
            "type": "integer",
            "enum": [
              0,
              403,
              500,
              4000,
              4001,
              4002,
              4003,
              4004,
              4010,
              4011,
              5001,
              5002
            ],
            "options": [
              {
                  "value": 0,
                  "label": "NoError",
                  "description": "No error has occurred."
              },
              {
                  "value": 403,
                  "label": "Forbidden",
                  "description": "The server understood the request, but is refusing to fulfil it."
              },
              {
                  "value": 500,
                  "label": "InternalServerError",
                  "description": "An unexpected condition was encountered by the server preventing it from fulfilling the request."
              },
              {
                  "value": 4000,
                  "label": "InvalidParameterType",
                  "description": "Server could not understand request due to an invalid parameter type."
              },
              {
                  "value": 4001,
                  "label": "ParameterMissing",
                  "description": "Server could not understand request due to a missing parameter."
              },
              {
                  "value": 4002,
                  "label": "InvalidParameterValue",
                  "description": "Server could not understand request due to an invalid parameter value."
              },
              {
                  "value": 4003,
                  "label": "InvalidJsonRequest",
                  "description": "Server could not understand request due to an invalid JSON request."
              },
              {
                  "value": 4004,
                  "label": "InvalidJsonRequestCaseFormat",
                  "description": "Server could not understand request due to an invalid JSON case format."
              },
              {
                  "value": 4010,
                  "label": "InvalidCredentials",
                  "description": "The credentials used to authenticate are invalid. Either the username, password or both are incorrect."
              },
              {
                  "value": 4011,
                  "label": "InvalidSession",
                  "description": "The session credentials supplied are invalid."
              },
              {
                  "value": 5001,
                  "label": "NoDataAvailable",
                  "description": "There is no data available."
              },
              {
                  "value": 5002,
                  "label": "Throttling",
                  "description": "Request has been throttled."
              }
            ],
            "description": "This is a description of the ErrorCode enum.",
            "demoValue": "403"
        },
        "GetActiveStopLimitOrderResponseDTO": {
            "id": "GetActiveStopLimitOrderResponseDTO",
            "type": "object",
            "properties": {
                "ActiveStopLimitOrder": {
                    "type": {
                        "$ref": "#.ApiActiveStopLimitOrderDTO"
                    },
                    "description": "The active stop limit order. If it is null then the active stop limit order does not exist."
                }
            },
            "description": "Response containing the active stop limit order."
        },
        "GetClientPreferenceResponseDTO": {
            "id": "GetClientPreferenceResponseDTO",
            "type": "object",
            "properties": {
                "ClientPreference": {
                    "type": {
                        "$ref": "#.ClientPreferenceKeyDTO"
                    },
                    "description": "The requested client preference key value pair."
                }
            },
            "description": "Results of client preference get."
        },
        "GetKeyListClientPreferenceResponseDTO": {
            "id": "GetKeyListClientPreferenceResponseDTO",
            "type": "object",
            "properties": {
                "ClientPreferenceKeys": {
                    "type": "array",
                    "items": [
                      "string"
                    ],
                    "description": "The list of client preference keys."
                }
            },
            "description": "Results of client preference get."
        },
        "GetListClientPreferenceResponseDTO": {
            "id": "GetListClientPreferenceResponseDTO",
            "type": "object",
            "properties": {
                "ClientPreferences": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ClientPreferenceKeyDTO"
                      }
                    ],
                    "description": "The requested client preference key value pair."
                }
            },
            "description": "List of results of client preference get."
        },
        "GetMarketInformationResponseDTO": {
            "id": "GetMarketInformationResponseDTO",
            "type": "object",
            "properties": {
                "MarketInformation": {
                    "type": {
                        "$ref": "#.ApiMarketInformationDTO"
                    },
                    "description": "The requested market information."
                }
            },
            "description": "Response from a market information request."
        },
        "GetMessagePopupResponseDTO": {
            "id": "GetMessagePopupResponseDTO",
            "type": "object",
            "properties": {
                "AskForClientApproval": {
                    "type": "boolean",
                    "description": "Flag indicating if the client application asks for client approval."
                },
                "Message": {
                    "type": "string",
                    "description": "The message to display to the client."
                }
            },
            "description": "Message popup response denoting whether the client application should display a popup notification at startup."
        },
        "GetNewsDetailResponseDTO": {
            "id": "GetNewsDetailResponseDTO",
            "type": "object",
            "properties": {
                "NewsDetail": {
                    "type": {
                        "$ref": "#.NewsDetailDTO"
                    },
                    "description": "The details of the news item."
                }
            },
            "description": "The response from the News Detail GET request."
        },
        "GetOpenPositionResponseDTO": {
            "id": "GetOpenPositionResponseDTO",
            "type": "object",
            "properties": {
                "OpenPosition": {
                    "type": {
                        "$ref": "#.ApiOpenPositionDTO"
                    },
                    "description": "The open position information. If it is null then the open position does not exist."
                }
            },
            "description": "Response containing the open position information."
        },
        "GetOrderResponseDTO": {
            "id": "GetOrderResponseDTO",
            "type": "object",
            "properties": {
                "TradeOrder": {
                    "type": {
                        "$ref": "#.ApiTradeOrderDTO"
                    },
                    "description": "The details of the order if it is a trade / open position."
                },
                "StopLimitOrder": {
                    "type": {
                        "$ref": "#.ApiStopLimitOrderDTO"
                    },
                    "description": "The details of the order if it is a stop limit order."
                }
            },
            "description": "Response containing the order. Only one of the two fields will be populated depending upon the type of order *(Trade or Stop / Limit)*."
        },
        "GetPriceBarResponseDTO": {
            "id": "GetPriceBarResponseDTO",
            "type": "object",
            "properties": {
                "PriceBars": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.PriceBarDTO"
                      }
                    ],
                    "description": "An array of finalized price bars, sorted in ascending order based on PriceBar.BarDate."
                },
                "PartialPriceBar": {
                    "type": {
                        "$ref": "#.PriceBarDTO"
                    },
                    "description": "The *(non-finalized)* price bar data for the current period *(i.e, the period that has not yet completed)*."
                }
            },
            "description": "The response from a price bar history GET request. Contains both an array of finalized price bars, and a partial *(not finalized)* bar for the current period."
        },
        "GetPriceTickResponseDTO": {
            "id": "GetPriceTickResponseDTO",
            "type": "object",
            "properties": {
                "PriceTicks": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.PriceTickDTO"
                      }
                    ],
                    "description": "An array of price ticks, sorted in ascending order by PriceTick.TickDate."
                }
            },
            "description": "The response from a request for historical Price Ticks."
        },
        "GetVersionInformationResponseDTO": {
            "id": "GetVersionInformationResponseDTO",
            "type": "object",
            "properties": {
                "MinimumRequiredVersion": {
                    "type": "string",
                    "description": "The minimum version of the client application that can be used. If the installed version is less than this it shouldn't be used."
                },
                "LatestVersion": {
                    "type": "string",
                    "description": "The latest version of the client application that can be used."
                },
                "UpgradeUrl": {
                    "type": "string",
                    "description": "The URL of the upgrade."
                }
            },
            "description": "The response containing version information and upgrade URL of the client application."
        },
        "InsertWatchlistItemRequestDTO": {
            "id": "InsertWatchlistItemRequestDTO",
            "type": "object",
            "properties": {
                "ParentWatchlistDisplayOrderId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The watchlist display order ID to add the item."
                },
                "MarketId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The market item to add into the watchlist."
                }
            },
            "description": "Update watchlist with item request."
        },
        "ListActiveStopLimitOrderResponseDTO": {
            "id": "ListActiveStopLimitOrderResponseDTO",
            "type": "object",
            "properties": {
                "ActiveStopLimitOrders": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiActiveStopLimitOrderDTO"
                      }
                    ],
                    "description": "The requested list of active stop / limit orders."
                }
            },
            "description": "Contains the response of a [ListActiveStopLimitOrders](http://labs.cityindex.com/docs/Content/HTTP%20Services/ListActiveStopLimitOrders.htm) query."
        },
        "ListCfdMarketsResponseDTO": {
            "id": "ListCfdMarketsResponseDTO",
            "type": "object",
            "properties": {
                "Markets": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiMarketDTO"
                      }
                    ],
                    "description": "A list of CFD markets."
                }
            },
            "description": "Contains the response of a [ListCfdMarkets](http://labs.cityindex.com/docs/Content/HTTP%20Services/ListCfdMarkets.htm) query."
        },
        "ListMarketInformationRequestDTO": {
            "id": "ListMarketInformationRequestDTO",
            "type": "object",
            "properties": {
                "MarketIds": {
                    "type": "array",
                    "items": [
                      "integer"
                    ],
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The list of market IDs to get information for."
                }
            },
            "description": "Get market information request for a list of markets."
        },
        "ListMarketInformationResponseDTO": {
            "id": "ListMarketInformationResponseDTO",
            "type": "object",
            "properties": {
                "MarketInformation": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiMarketInformationDTO"
                      }
                    ],
                    "description": "The list of market information for each requested market."
                }
            },
            "description": "Response from a market information request."
        },
        "ListMarketInformationSearchResponseDTO": {
            "id": "ListMarketInformationSearchResponseDTO",
            "type": "object",
            "properties": {
                "MarketInformation": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiMarketInformationDTO"
                      }
                    ],
                    "description": "The requested list of market information."
                }
            },
            "description": "Response from a market information search request."
        },
        "ListMarketSearchResponseDTO": {
            "id": "ListMarketSearchResponseDTO",
            "type": "object",
            "properties": {
                "Markets": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiMarketDTO"
                      }
                    ],
                    "description": "The requested list of markets."
                }
            },
            "description": "Response from a market search request."
        },
        "ListNewsHeadlinesRequestDTO": {
            "id": "ListNewsHeadlinesRequestDTO",
            "type": "object",
            "properties": {
                "Source": {
                    "type": "string",
                    "description": "The source for the news stories. Leave blank to use the default Dow Jones news provider as the source."
                },
                "Category": {
                    "type": "string",
                    "description": "A news category that can be used to filter the news."
                },
                "MarketId": {
                    "type": "integer",
                    "description": "A market ID that can be used to filter the news."
                },
                "MarketName": {
                    "type": "string",
                    "description": "A market name that can be used to filter the news."
                },
                "RicCode": {
                    "type": "string",
                    "description": "A Reuters Instrument Code *(RIC)* that can be used to filter the news."
                },
                "MaxResults": {
                    "type": "integer",
                    "description": "The maximum number of responses to return. Leave blank to return the top 25 results."
                },
                "CultureId": {
                    "type": "integer",
                    "description": "The Culture ID used to filter results. Leave blank to use the culture of the requesting user."
                },
            },
            "description": "A request for news stories. The stories can be filtered by one of the four available filters: *(Category, MarketId, MarketName, RicCode)*. Only use **1** of the filters at a time. If zero or more than one filter is used simultaneously, then an exception is thrown and a 400 status error code is returned."
        },
        "ListNewsHeadlinesResponseDTO": {
            "id": "ListNewsHeadlinesResponseDTO",
            "type": "object",
            "properties": {
                "Headlines": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.NewsDTO"
                      }
                    ],
                    "description": "A list of News headlines."
                }
            },
            "description": "The response from a GET request for News headlines."
        },
        "ListOpenPositionsResponseDTO": {
            "id": "ListOpenPositionsResponseDTO",
            "type": "object",
            "properties": {
                "OpenPositions": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiOpenPositionDTO"
                      }
                    ],
                    "description": "A list of trades / open positions."
                }
            },
            "description": "Contains the result of a [ListOpenPositions](http://labs.cityindex.com/docs/Content/HTTP%20Services/ListOpenPositions.htm) query."
        },
        "ListSpreadMarketsResponseDTO": {
            "id": "ListSpreadMarketsResponseDTO",
            "type": "object",
            "properties": {
                "Markets": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiMarketDTO"
                      }
                    ],
                    "description": "A list of Spread Betting markets."
                }
            },
            "description": "Contains the result of a [ListSpreadMarkets](http://labs.cityindex.com/docs/Content/HTTP%20Services/ListSpreadMarkets.htm) query."
        },
        "ListStopLimitOrderHistoryResponseDTO": {
            "id": "ListStopLimitOrderHistoryResponseDTO",
            "type": "object",
            "properties": {
                "StopLimitOrderHistory": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiStopLimitOrderHistoryDTO"
                      }
                    ],
                    "description": "A list of historical stop / limit orders."
                }
            },
            "description": "Contains the result of a [ListStopLimitOrderHistory](http://labs.cityindex.com/docs/Content/HTTP%20Services/ListStopLimitOrderHistory.htm) query."
        },
        "ListTradeHistoryResponseDTO": {
            "id": "ListTradeHistoryResponseDTO",
            "type": "object",
            "properties": {
                "TradeHistory": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiTradeHistoryDTO"
                      }
                    ],
                    "description": "A list of historical trades."
                },
                "SupplementalOpenOrders": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiTradeHistoryDTO"
                      }
                    ],
                    "description": "A list of trades which are referenced as OpenOrderId's in the trade history list - but do not actually exist in that list."
                }
            },
            "description": "Contains the result of a [ListTradeHistory](http://labs.cityindex.com/docs/Content/HTTP%20Services/ListTradeHistory.htm) query."
        },
        "ListWatchlistResponseDTO": {
            "id": "ListWatchlistResponseDTO",
            "type": "object",
            "properties": {
                "ClientAccountId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Client account ID."
                },
                "ClientAccountWatchlists": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiClientAccountWatchlistDTO"
                      }
                    ],
                    "description": "List of client account watchlists."
                }
            },
            "description": "Response to a client watchlist GET request."
        },
        "MarketInformationSearchWithTagsResponseDTO": {
            "id": "MarketInformationSearchWithTagsResponseDTO",
            "type": "object",
            "properties": {
                "Markets": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiMarketDTO"
                      }
                    ],
                    "description": "The requested list of market information."
                },
                "Tags": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiMarketTagDTO"
                      }
                    ],
                    "description": "The requested list of market tags."
                }
            },
            "description": "Response from a market information search with tags request."
        },
        "MarketInformationTagLookupResponseDTO": {
            "id": "MarketInformationTagLookupResponseDTO",
            "type": "object",
            "properties": {
                "Tags": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiPrimaryMarketTagDTO"
                      }
                    ],
                    "description": "The requested list of market tags."
                }
            },
            "description": "Response from a search request of market information tags."
        },
        "NewsDetailDTO": {
            "id": "NewsDetailDTO",
            "type": "object",
            "extends": "#.NewsDTO",
            "properties": {
                "Story": {
                    "type": "string",
                    "minLength": 0,
                    "maxLength": 2147483647,
                    "description": "The detail of the news story. This can contain HTML characters."
                }
            },
            "description": "Contains details of a specific news story."
        },
        "NewsDTO": {
            "id": "NewsDTO",
            "type": "object",
            "properties": {
                "StoryId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The unique identifier for a news story."
                },
                "Headline": {
                    "type": "string",
                    "description": "The news story headline."
                },
                "PublishDate": {
                    "type": "string",
                    "format": "wcf-date",
                    "description": "The date on which the news story was published. Always in UTC."
                }
            },
            "description": "A headline for a news story."
        },
        "NewStopLimitOrderRequestDTO": {
            "id": "NewStopLimitOrderRequestDTO",
            "type": "object",
            "properties": {
                "OrderId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The identifier of the order to update."
                },
                "MarketId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The unique identifier for the market."
                },
                "Currency": {
                    "type": "string",
                    "description": "Currency to place order in."
                },
                "AutoRollover": {
                    "type": "boolean",
                    "description": "Flag to indicate whether the trade will automatically roll into the next market when the current market expires."
                },
                "Direction": {
                    "type": "string",
                    "description": "Direction identifier for order/trade, values supported are buy or sell."
                },
                "PositionMethodId": {
                    "type": [
                      "null",
                      "integer"
                    ],
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Indicates the position of the trade. 1 == LongOrShortOnly, 2 == LongAndShort."
                },
                "Quantity": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Size of the order/trade."
                },
                "BidPrice": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Market prices are quoted as a pair *(buy/sell or bid/offer)*, the BidPrice is the lower of the two."
                },
                "OfferPrice": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Market prices are quoted as a pair *(buy/sell or bid/offer)*, the OfferPrice is the higher of the market price pair."
                },
                "AuditId": {
                    "type": "string",
                    "description": "Unique identifier for a price tick."
                },
                "TradingAccountId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The ID of the trading account associated with the trade/order request."
                },
                "IfDone": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiIfDoneDTO"
                      }
                    ],
                    "description": "List of If/Done Orders that will be filled when the initial trade/order is triggered."
                },
                "OcoOrder": {
                    "type": {
                        "$ref": "#.NewStopLimitOrderRequestDTO"
                    },
                    "description": "Corresponding OCO Order (One Cancels the Other) if one has been defined."
                },
                "Applicability": {
                    "type": "string",
                    "description": "Identifier which relates to the expiry of the order/trade, i.e. GoodTillDate (GTD), GoodTillCancelled (GTC) or GoodForDay (GFD)."
                },
                "ExpiryDateTimeUTC": {
                    "type": [
                      "null",
                      "string"
                    ],
                    "format": "wcf-date",
                    "description": "The associated expiry DateTime for a pair of GoodTillDate If/Done orders."
                },
                "Guaranteed": {
                    "type": "boolean",
                    "description": "Flag to determine whether an order is guaranteed to trigger and fill at the associated trigger price."
                },
                "TriggerPrice": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Price at which the order is intended to be triggered."
                }
            },
            "description": "A request for a stop/limit order."
        },
        "NewTradeOrderRequestDTO": {
            "id": "NewTradeOrderRequestDTO",
            "type": "object",
            "properties": {
                "MarketId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The unique identifier for a market."
                },
                "Currency": {
                    "type": "string",
                    "description": "Currency to place order in."
                },
                "AutoRollover": {
                    "type": "boolean",
                    "description": "Flag to indicate whether the trade will automatically roll into the next market interval when the current market interval expires."
                },
                "Direction": {
                    "type": "string",
                    "description": "Direction identifier for order/trade, values supported are buy or sell."
                },
                "Quantity": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Size of the order/trade."
                },
                "QuoteId": {
                    "type": [
                      "null",
                      "integer"
                    ],
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The quote identifier"
                },
                "PositionMethodId": {
                    "type": [
                      "null",
                      "integer"
                    ],
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Indicates the position of the trade. 1 == LongOrShortOnly, 2 == LongAndShort."
                },
                "BidPrice": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Market prices are quoted as a pair *(buy/sell or bid/offer)*, the BidPrice is the lower value of the pair."
                },
                "OfferPrice": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "Market prices are quote as a pair *(buy/sell or bid/offer)*, the OfferPrice is the higher value of the pair."
                },
                "AuditId": {
                    "type": "string",
                    "description": "Unique identifier for a price tick."
                },
                "TradingAccountId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The ID of the trading account associated with the trade/order request."
                },
                "IfDone": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiIfDoneDTO"
                      }
                    ],
                    "description": "List of If/Done Orders that will be filled when the initial trade/order is triggered."
                },
                "Close": {
                    "type": "array",
                    "items": [
                      "integer"
                    ],
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "List of existing order ID's that require part or full closure."
                }
            },
            "description": "A request for a trade order."
        },
        "OrderDTO": {
            "id": "OrderDTO",
            "type": "object",
            "properties": {
                "OrderId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The Order identifier."
                },
                "MarketId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The Market identifier."
                },
                "ClientAccountId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Client account ID."
                },
                "TradingAccountId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Trading account ID."
                },
                "CurrencyId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Trade currency ID."
                },
                "CurrencyISO": {
                    "type": "string",
                    "description": "Trade currency ISO code."
                },
                "Direction": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Direction of the order (1 == buy, 0 == sell)."
                },
                "AutoRollover": {
                    "type": "boolean",
                    "description": "Flag indicating whether the order automatically rolls over."
                },
                "LastChangedTime": {
                    "type": "string",
                    "format": "wcf-date",
                    "description": "The date and time that the order was last changed. Always expressed in UTC."
                },
                "OpenPrice": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The open price of the order."
                },
                "OriginalLastChangedDateTime": {
                    "type": "string",
                    "format": "wcf-date",
                    "description": "The date of the order. Always expressed in UTC."
                },
                "OriginalQuantity": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The orders original quantity, before any part / full closures."
                },
                "PositionMethodId": {
                    "type": [
                      "null",
                      "integer"
                    ],
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Indicates the position of the trade. 1 == LongOrShortOnly, 2 == LongAndShort."
                },
                "Quantity": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The current quantity of the order."
                },
                "Type": {
                    "type": "string",
                    "description": "The type of the order *(1 = Trade / 2 = Stop / 3 = Limit)*."
                },
                "Status": {
                    "type": "string",
                    "description": "The order status ID."
                },
                "ReasonId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The order status reason identifier."
                }
            },
            "description": "An order for a specific Trading Account."
        },
        "PriceBarDTO": {
            "id": "PriceBarDTO",
            "type": "object",
            "properties": {
                "BarDate": {
                    "type": "string",
                    "format": "wcf-date",
                    "description": "The starting date for the price bar interval."
                },
                "Open": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The price at the start *(open)* of the price bar interval."
                },
                "High": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The highest price occurring during the interval of the price bar."
                },
                "Low": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The lowest price occurring during the interval of the price bar."
                },
                "Close": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The price at the end *(close)* of the price bar interval."
                }
            },
            "description": "The details of a specific price bar, useful for plotting candlestick charts."
        },
        "PriceDTO": {
            "id": "PriceDTO",
            "type": "object",
            "properties": {
                "MarketId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The Market that the Price is related to."
                },
                "TickDate": {
                    "type": "string",
                    "format": "wcf-date",
                    "description": "The date of the Price. Always expressed in UTC."
                },
                "Bid": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The current Bid price *(price at which the customer can sell)*."
                },
                "Offer": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The current Offer price *(price at which the customer can buy, sometimes referred to as Ask price)*."
                },
                "Price": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The current mid price."
                },
                "High": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The highest price reached for the day."
                },
                "Low": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The lowest price reached for the day."
                },
                "Change": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The change from the previous day's close to the current price - can be negative or positive."
                },
                "Direction": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The direction of movement since the last price. 1 == up, 0 == down."
                },
                "Delta": {
                    "type": [
                      "null",
                      "number"
                    ],
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The Delta of an option. Delta measures the rate of change of option value with respect to changes in the underlying asset's price. This is null for non-option markets."
                },
                "ImpliedVolatility": {
                    "type": [
                      "null",
                      "number"
                    ],
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "A measure of an options's price variance over time. **Note:** this volatility is a calculated value from a proprietary model. For non-option markets this is null."
                },
                "AuditId": {
                    "type": "string",
                    "description": "A unique ID for this price. Treat as a unique, but random string."
                },
                "StatusSummary": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The current status summary for this price. Values are: 0 = Normal 1 = Indicative 2 = PhoneOnly 3 = Suspended 4 = Closed"
                }
            },
            "description": "A Price for a specific Market."
        },
        "PriceTickDTO": {
            "id": "PriceTickDTO",
            "type": "object",
            "properties": {
                "TickDate": {
                    "type": "string",
                    "format": "wcf-date",
                    "description": "The date time at which a price tick occurred. Accurate to the millisecond."
                },
                "Price": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The mid price."
                }
            },
            "description": "The mid price at the point in time of the price tick."
        },
        "QuoteDTO": {
            "id": "QuoteDTO",
            "type": "object",
            "properties": {
                "QuoteId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The unique ID of the Quote."
                },
                "OrderId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The ID of the Order that the Quote is related to."
                },
                "MarketId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The Market the Quote is related to."
                },
                "BidPrice": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The Price of the original Order request for a Buy."
                },
                "BidAdjust": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The amount the bid price will be adjusted to become an order when the customer is buying *(BidPrice + BidAdjust = BuyPrice)*."
                },
                "OfferPrice": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The Price of the original Order request for a Sell."
                },
                "OfferAdjust": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The amount the offer price will be adjusted to become an order when the customer is selling *(OfferPrice + OfferAdjust = OfferPrice)*."
                },
                "Quantity": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The Quantity is the number of units for the trade i.e CFD Quantity = Number of CFDs to Buy or Sell , FX Quantity = amount in base currency."
                },
                "CurrencyId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The system internal ID for the ISO Currency. An API call will be available in the near future to look up the equivalent ISO Code."
                },
                "StatusId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The Status ID of the Quote. An API call will be available in the near future to look up the Status values."
                },
                "TypeId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The quote type ID."
                },
                "RequestDateTimeUTC": {
                    "type": "string",
                    "format": "wcf-date",
                    "description": "The timestamp the quote was requested. Always expressed in UTC."
                },
                "ApprovalDateTimeUTC": {
                    "type": "string",
                    "format": "wcf-date",
                    "description": "The timestamp the quote was approved. Always expressed in UTC."
                },
                "BreathTimeSecs": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Amount of time in seconds the quote is valid for."
                },
                "IsOversize": {
                    "type": "boolean",
                    "description": "Is the quote oversize."
                },
                "ReasonId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The reason for generating the quote."
                },
                "TradingAccountId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The trading account identifier that generated the quote."
                }
            },
            "description": "A quote for a specific order request."
        },
        "SaveClientPreferenceRequestDTO": {
            "id": "SaveClientPreferenceRequestDTO",
            "type": "object",
            "properties": {
                "ClientPreference": {
                    "type": {
                        "$ref": "#.ClientPreferenceKeyDTO"
                    },
                    "description": "The list of client preferences key value pairs to be saved."
                }
            },
            "description": "Save client preferences."
        },
        "SaveMarketInformationRequestDTO": {
            "id": "SaveMarketInformationRequestDTO",
            "type": "object",
            "properties": {
                "MarketInformation": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiMarketInformationSaveDTO"
                      }
                    ],
                    "description": "The list of market information objects to be saved."
                },
                "TradingAccountId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The trading account on which the market information objects should be saved."
                }
            },
            "description": "Get market information for a list of markets."
        },
        "SystemStatusDTO": {
            "id": "SystemStatusDTO",
            "type": "object",
            "properties": {
                "StatusMessage": {
                    "type": "string",
                    "description": "The status message."
                }
            },
            "description": "Response containing the system status."
        },
        "SystemStatusRequestDTO": {
            "id": "SystemStatusRequestDTO",
            "type": "object",
            "properties": {
                "TestDepth": {
                    "type": "string",
                    "description": "Depth to test."
                }
            },
            "description": "System status request."
        },
        "TradeMarginDTO": {
            "id": "TradeMarginDTO",
            "type": "object",
            "properties": {
                "ClientAccountId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The client account this message relates to."
                },
                "DirectionId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The order direction, 1 == Buy and 0 == Sell."
                },
                "MarginRequirementConverted": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The margin requirement converted to the correct currency for this order."
                },
                "MarginRequirementConvertedCurrencyId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The currency ID of the margin requirement for this order. See the \"Currency ID\" section of the CIAPI User Guide for a listing of the currency IDs."
                },
                "MarginRequirementConvertedCurrencyISOCode": {
                    "type": "string",
                    "description": "The currency ISO code of the margin requirement for this order."
                },
                "MarketId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The market ID the order is on."
                },
                "MarketTypeId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The market type ID. 1 = Option Market; 2 = Ordinary Market; 4 = Binary Market."
                },
                "Multiplier": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The margin multiplier."
                },
                "OrderId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The Order ID."
                },
                "OTEConverted": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The Open Trade Equity converted to the correct currency for this order."
                },
                "OTEConvertedCurrencyId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The currency ID of the OTE for this order. See the \"Currency ID\" section of the CIAPI User Guide for a listing of the currency IDs."
                },
                "OTEConvertedCurrencyISOCode": {
                    "type": "string",
                    "description": "The currency ISO code of the OTE for this order."
                },
                "PriceCalculatedAt": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The price the calculation was performed at."
                },
                "PriceTakenAt": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The price the order was taken at."
                },
                "Quantity": {
                    "type": "number",
                    "format": "decimal",
                    "minValue": -7.9228162514264338E+28,
                    "maxValue": 7.9228162514264338E+28,
                    "description": "The quantity of the order."
                }
            },
            "description": "The current margin requirement and open trade equity (OTE) of an order, used in the TradeMargin stream."
        },
        "UpdateDeleteClientPreferenceResponseDTO": {
            "id": "UpdateDeleteClientPreferenceResponseDTO",
            "type": "object",
            "properties": {
                "Successful": {
                    "type": "boolean",
                    "description": "Status of save"
                }
            },
            "description": "A bool result to signify status of completed operation."
        },
        "UpdateStopLimitOrderRequestDTO": {
            "id": "UpdateStopLimitOrderRequestDTO",
            "type": "object",
            "extends": "#.NewStopLimitOrderRequestDTO",
            "properties": {},
            "description": "A request to update a stop/limit order."
        },
        "UpdateTradeOrderRequestDTO": {
            "id": "UpdateTradeOrderRequestDTO",
            "type": "object",
            "extends": "#.NewTradeOrderRequestDTO",
            "properties": {       
                "OrderId": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The identifier of the order to update."
                }
            },
            "description": "A request to update a trade order."
        },
        "UpdateWatchlistDisplayOrderRequestDTO": {
            "id": "UpdateWatchlistDisplayOrderRequestDTO",
            "type": "object",
            "properties": {
                "NewDisplayOrderIdSequence": {
                    "type": "array",
                    "items": [
                      "integer"
                    ],
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "Represents the new client watchlist displayOrderId list sequence."
                }
            },
            "description": "Request to update the display order of items in a watchlist."
        },
        "ListActiveOrdersRequestDTO": {
            "id": "ListActiveOrdersRequestDTO",
            "type": "object",
            "properties": {
                "TradingAccountId": {
                    "type": "integer",
                    "description": "If specified, the request fetches all open positions and orders for this trading account. *(Optional)*"
                },
                "MaxResults": {
                    "type": "integer",
                    "description": "The maximum number of results to return."
                },
            },
            "description": "Contains the request for a [ListActiveOrders](http://labs.cityindex.com/docs/Content/HTTP%20Services/ListActiveOrders.htm) query."
        },
        "ListActiveOrdersResponseDTO": {
            "id": "ListActiveOrdersResponsetDTO",
            "type": "object",
            "properties": {
                "ActiveOrders": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiActiveOrderDTO"
                      }
                    ],
                    "description": "The requested list of open positions and active orders."
                },        
            },
            "description": "Contains the response for a [ListActiveOrders](http://labs.cityindex.com/docs/Content/HTTP%20Services/ListActiveOrders.htm) query."
        },
        "ApiActiveOrderDTO": {
            "id": "ApiActiveOrderDTO",
            "type": "object",
            "properties": {        
                "TradeOrder": {
                    "type": {
                        "$ref": "#.ApiTradeOrderDTO"
                    },
                    "description": "Represents a trade order."
                },
                "StopLimitOrder": {
                    "type": {
                        "$ref": "#.ApiStopLimitOrderDTO"
                    },
                    "description": "Represents a stop/limit order."
                },       
                "TypeId": {
                    "type": "integer",
                    "description": "Indicates the type of the order. "
                },
            },
            "description": "Represents a trade order or a stop/limit order."
        },
        "ApiSimulateTradeOrderResponseDTO": {
            "id": "ApiSimulateTradeOrderResponseDTO",
            "type": "object",
            "properties": {
                "Status": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The status of the simulated order *(Pending, Accepted, Open, etc.)*"
                },
                "StatusReason": {
                    "type": "integer",
                    "minValue": -2147483648,
                    "maxValue": 2147483647,
                    "description": "The ID corresponding to a more descriptive reason for the order status."
                },
                "SimulatedCash": {
                    "type": "decimal",         
                    "description": "The simulated cash balance after executing *(opening or closing)* a trade. The balance may decrease after opening a trade *(as cash may be allocated towards margin requirement)* and increase /reduce /remain unchanged following a closure." 
                },
                "ActualCash": {
                    "type": "decimal",         
                    "description": "The actual cash balance before the trade."
                },
                "SimulatedTotalMarginRequirement": {
                    "type": "decimal",         
                    "description": "The simulated total margin requirement (TMR) after executing *(opening or closing)* a trade."
                },
                "ActualTotalMarginRequirement": {
                    "type": "decimal",         
                    "description": "The actual total margin requirement (TMR) before the trade."
                },
                "CurrencyId": {
                    "type": "integer",         
                    "description": "The currency ID for the currency values in this response."
                },
                "Orders": {
                    "type": "array",
                    "items": [
                      {
                          "$ref": "#.ApiSimulateOrderResponseDTO"
                      }
                    ],
                    "description": "List of simulated orders with their associated response."
                },      
            },
            "description": "The response from the simulated trade request."
        }
    }
}