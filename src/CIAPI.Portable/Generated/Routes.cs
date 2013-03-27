using System;
using System.Collections.Generic;
using Salient.Portable.HttpArchiveFormat;
using CIAPI.Portable.Model;
using System.Threading.Tasks;
using Newtonsoft.Json;
namespace CIAPI.Portable.Rpc
{
    public partial class Client
    {

      public _Authentication Authentication{get; private set;}
      public _PriceHistory PriceHistory{get; private set;}
      public _News News{get; private set;}
      public _CFDMarkets CFDMarkets{get; private set;}
      public _SpreadMarkets SpreadMarkets{get; private set;}
      public _Market Market{get; private set;}
      public _Preference Preference{get; private set;}
      public _TradesAndOrders TradesAndOrders{get; private set;}
      public _AccountInformation AccountInformation{get; private set;}
      public _Messaging Messaging{get; private set;}
      public _Watchlist Watchlist{get; private set;}
      public _ClientApplication ClientApplication{get; private set;}
        private Client _client;
        public string AppKey { get; set; }
        public Client(string rpcUri, string appKey)
        {
        AppKey=appKey;
        _client=this;
        ApiBaseUrl = rpcUri;

            this. Authentication = new _Authentication(this);
            this. PriceHistory = new _PriceHistory(this);
            this. News = new _News(this);
            this. CFDMarkets = new _CFDMarkets(this);
            this. SpreadMarkets = new _SpreadMarkets(this);
            this. Market = new _Market(this);
            this. Preference = new _Preference(this);
            this. TradesAndOrders = new _TradesAndOrders(this);
            this. AccountInformation = new _AccountInformation(this);
            this. Messaging = new _Messaging(this);
            this. Watchlist = new _Watchlist(this);
            this. ClientApplication = new _ClientApplication(this);
        }

        // ***********************************
        // ListActiveOrders
        // ***********************************


        /// <summary>
        /// Queries the specified trading account for all open positions and active orders. This URI is intended to support a grid in a UI. One usage pattern is to subscribe to streaming orders, call this for the initial data to display in the grid, and call the HTTP service [GetOpenPosition](http://labs.cityindex.com/docs/Content/HTTP%20Services/GetOpenPosition.htm) when you get updates on the order stream to get the updated data in this format. **Notes on Parameters** >**ClientAccountId** - this can be passed in order to retrieve all information on all trading accounts for which it is the parent. >**TradingAccountId** - this can be passed to retrieve information specific to a certain trading account *(the child of ClientAccount)*.  If *neither* ClientAccountId nor TradingAccountId is passed, then the information returned by default from the API is ClientAccount.
        /// </summary>
        /// <param name="requestDTO">Contains the request for a ListActiveOrders query.</param>
        public virtual Task<ListActiveOrdersResponseDTO> ListActiveOrdersAsync(ListActiveOrdersRequestDTO requestDTO)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "POST",
                    Url = _client.ApiBaseUrl + "/order/activeorders",
                    PostData = new PostData{
                       MimeType = "application/json",
                       Params = new Parameters(new NameValuePair("", requestDTO))
                    }
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ListActiveOrdersResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ListActiveOrdersResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        public class _Authentication
        {
            private Client _client;
            public _Authentication(Client client){ this._client = client;}

        // ***********************************
        // LogOn
        // ***********************************


        /// <summary>
        /// Create a new session. This is how you "log on" to the CIAPI.
        /// </summary>
        /// <param name="apiLogOnRequest">The request to create a session *(log on)*.</param>
        internal virtual Task<ApiLogOnResponseDTO> LogOnAsync(ApiLogOnRequestDTO apiLogOnRequest)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "POST",
                    Url = _client.ApiBaseUrl + "/session/",
                    PostData = new PostData{
                       MimeType = "application/json",
                       Params = new Parameters(new NameValuePair("", apiLogOnRequest))
                    }
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ApiLogOnResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ApiLogOnResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // DeleteSession
        // ***********************************


        /// <summary>
        /// Delete a session. This is how you "log off" from the CIAPI.
        /// </summary>
        /// <param name="UserName">Username is case sensitive. May be set as a service parameter or as a request header.</param>
        /// <param name="Session">The session token. May be set as a service parameter or as a request header.</param>
        internal virtual Task<ApiLogOffResponseDTO> DeleteSessionAsync(string UserName, string Session)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "POST",
                    Url = _client.ApiBaseUrl + "/session/deleteSession?UserName={UserName}&session={session}",
                    PostData = new PostData{
                       MimeType = "application/json",
                       Params = new Parameters()
                    },
                    QueryString = new QueryString(new NameValuePair("UserName", UserName), new NameValuePair("Session", Session))
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ApiLogOffResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ApiLogOffResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // ChangePassword
        // ***********************************


        /// <summary>
        /// Change a user's password.
        /// </summary>
        /// <param name="apiChangePasswordRequest">The change password request details.</param>
        public virtual Task<ApiChangePasswordResponseDTO> ChangePasswordAsync(ApiChangePasswordRequestDTO apiChangePasswordRequest)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "POST",
                    Url = _client.ApiBaseUrl + "/session/changePassword",
                    PostData = new PostData{
                       MimeType = "application/json",
                       Params = new Parameters(new NameValuePair("", apiChangePasswordRequest))
                    }
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ApiChangePasswordResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ApiChangePasswordResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        }            
        public class _PriceHistory
        {
            private Client _client;
            public _PriceHistory(Client client){ this._client = client;}

        // ***********************************
        // GetPriceBars
        // ***********************************


        /// <summary>
        /// Get historic price bars for the specified market in OHLC *(open, high, low, close)* format, suitable for plotting in candlestick charts. Returns price bars in ascending order up to the current time. When there are no prices for a particular time period, no price bar is returned. Thus, it can appear that the array of price bars has "gaps", i.e. the gap between the date & time of each price bar might not be equal to interval x span.  Sample Urls: * /market/1234/history?interval=MINUTE&span=15&PriceBars=180 * /market/735/history?interval=HOUR&span=1&PriceBars=240 * /market/1577/history?interval=DAY&span=1&PriceBars=10
        /// </summary>
        /// <param name="MarketId">The ID of the market.</param>
        /// <param name="interval">The pricebar interval.</param>
        /// <param name="span">The number of each interval per pricebar.</param>
        /// <param name="PriceBars">The total number of price bars to return.</param>
        public virtual Task<GetPriceBarResponseDTO> GetPriceBarsAsync(string MarketId, string interval, int span, string PriceBars)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "GET",
                    Url = _client.ApiBaseUrl + "/market/{MarketId}/barhistory?interval={interval}&span={span}&PriceBars={PriceBars}",
                    QueryString = new QueryString(new NameValuePair("MarketId", MarketId), new NameValuePair("interval", interval), new NameValuePair("span", span), new NameValuePair("PriceBars", PriceBars))
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<GetPriceBarResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<GetPriceBarResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // GetPriceTicks
        // ***********************************


        /// <summary>
        /// Get historic price ticks for the specified market. Returns price ticks in ascending order up to the current time. The length of time that elapses between each tick is usually different.
        /// </summary>
        /// <param name="MarketId">The market ID.</param>
        /// <param name="PriceTicks">The total number of price ticks to return.</param>
        public virtual Task<GetPriceTickResponseDTO> GetPriceTicksAsync(string MarketId, string PriceTicks)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "GET",
                    Url = _client.ApiBaseUrl + "/market/{MarketId}/tickhistory?PriceTicks={PriceTicks}",
                    QueryString = new QueryString(new NameValuePair("MarketId", MarketId), new NameValuePair("PriceTicks", PriceTicks))
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<GetPriceTickResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<GetPriceTickResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        }            
        public class _News
        {
            private Client _client;
            public _News(Client client){ this._client = client;}

        // ***********************************
        // ListNewsHeadlinesWithSource
        // ***********************************


        /// <summary>
        /// Get a list of current news headlines.
        /// </summary>
        /// <param name="source">The news feed source provider. Valid options are: **dj**|**mni**|**ci**.</param>
        /// <param name="category">Filter headlines by category. Valid categories depend on the source used:  for **dj**: *uk*|*aus*, for **ci**: *SEMINARSCHINA*, for **mni**: *ALL*.</param>
        /// <param name="maxResults">Specify the maximum number of headlines returned.</param>
        public virtual Task<ListNewsHeadlinesResponseDTO> ListNewsHeadlinesWithSourceAsync(string source, string category, int maxResults)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "GET",
                    Url = _client.ApiBaseUrl + "/news/{source}/{category}?MaxResults={maxResults}",
                    QueryString = new QueryString(new NameValuePair("source", source), new NameValuePair("category", category), new NameValuePair("maxResults", maxResults))
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ListNewsHeadlinesResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ListNewsHeadlinesResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // ListNewsHeadlines
        // ***********************************


        /// <summary>
        /// Get a list of current news headlines.
        /// </summary>
        /// <param name="request">Object specifying the various request parameters.</param>
        public virtual Task<ListNewsHeadlinesResponseDTO> ListNewsHeadlinesAsync(ListNewsHeadlinesRequestDTO request)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "POST",
                    Url = _client.ApiBaseUrl + "/news/headlines",
                    PostData = new PostData{
                       MimeType = "application/json",
                       Params = new Parameters(new NameValuePair("", request))
                    }
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ListNewsHeadlinesResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ListNewsHeadlinesResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // GetNewsDetail
        // ***********************************


        /// <summary>
        /// Get the detail of the specific news story matching the story ID in the parameter.
        /// </summary>
        /// <param name="source">The news feed source provider. Valid options are **dj**|**mni**|**ci**.</param>
        /// <param name="storyId">The news story ID.</param>
        public virtual Task<GetNewsDetailResponseDTO> GetNewsDetailAsync(string source, string storyId)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "GET",
                    Url = _client.ApiBaseUrl + "/news/{source}/{storyId}",
                    QueryString = new QueryString(new NameValuePair("source", source), new NameValuePair("storyId", storyId))
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<GetNewsDetailResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<GetNewsDetailResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        }            
        public class _CFDMarkets
        {
            private Client _client;
            public _CFDMarkets(Client client){ this._client = client;}

        // ***********************************
        // ListCfdMarkets
        // ***********************************


        /// <summary>
        /// Returns a list of CFD markets filtered by market name and/or market code. Leave the market name and code parameters empty to return all markets available to the User.
        /// </summary>
        /// <param name="searchByMarketName">The characters that the CFD market name starts with. *(Optional)*.</param>
        /// <param name="searchByMarketCode">The characters that the market code starts with, normally this is the RIC code for the market. *(Optional)*.</param>
        /// <param name="ClientAccountId">The logged on user's ClientAccountId. This only shows you the markets that the user can trade. *(Required)*.</param>
        /// <param name="maxResults">The maximum number of markets to return.</param>
        /// <param name="useMobileShortName">True if the market name should be in short form. Helpful when displaying data on a small screen.</param>
        public virtual Task<ListCfdMarketsResponseDTO> ListCfdMarketsAsync(string searchByMarketName, string searchByMarketCode, int ClientAccountId, int maxResults, bool useMobileShortName)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "GET",
                    Url = _client.ApiBaseUrl + "/cfd/markets?MarketName={searchByMarketName}&MarketCode={searchByMarketCode}&ClientAccountId={ClientAccountId}&MaxResults={maxResults}&UseMobileShortName={useMobileShortName}",
                    QueryString = new QueryString(new NameValuePair("searchByMarketName", searchByMarketName), new NameValuePair("searchByMarketCode", searchByMarketCode), new NameValuePair("ClientAccountId", ClientAccountId), new NameValuePair("maxResults", maxResults), new NameValuePair("useMobileShortName", useMobileShortName))
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ListCfdMarketsResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ListCfdMarketsResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        }            
        public class _SpreadMarkets
        {
            private Client _client;
            public _SpreadMarkets(Client client){ this._client = client;}

        // ***********************************
        // ListSpreadMarkets
        // ***********************************


        /// <summary>
        /// Returns a list of Spread Betting markets filtered by market name and/or market code. Leave the market name and code parameters empty to return all markets available to the User.
        /// </summary>
        /// <param name="searchByMarketName">The characters that the Spread market name starts with. *(Optional)*.</param>
        /// <param name="searchByMarketCode">The characters that the Spread market code starts with, normally this is the RIC code for the market. *(Optional)*.</param>
        /// <param name="ClientAccountId">The logged on user's ClientAccountId. *(This only shows you markets that you can trade on.)*</param>
        /// <param name="maxResults">The maximum number of markets to return.</param>
        /// <param name="useMobileShortName">True if the market name should be in short form. Helpful when displaying data on a small screen.</param>
        public virtual Task<ListSpreadMarketsResponseDTO> ListSpreadMarketsAsync(string searchByMarketName, string searchByMarketCode, int ClientAccountId, int maxResults, bool useMobileShortName)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "GET",
                    Url = _client.ApiBaseUrl + "/spread/markets?MarketName={searchByMarketName}&MarketCode={searchByMarketCode}&ClientAccountId={ClientAccountId}&MaxResults={maxResults}&UseMobileShortName={useMobileShortName}",
                    QueryString = new QueryString(new NameValuePair("searchByMarketName", searchByMarketName), new NameValuePair("searchByMarketCode", searchByMarketCode), new NameValuePair("ClientAccountId", ClientAccountId), new NameValuePair("maxResults", maxResults), new NameValuePair("useMobileShortName", useMobileShortName))
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ListSpreadMarketsResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ListSpreadMarketsResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        }            
        public class _Market
        {
            private Client _client;
            public _Market(Client client){ this._client = client;}

        // ***********************************
        // GetMarketInformation
        // ***********************************


        /// <summary>
        /// Get Market Information for the single specified market supplied in the parameter.
        /// </summary>
        /// <param name="MarketId">The market ID.</param>
        public virtual Task<GetMarketInformationResponseDTO> GetMarketInformationAsync(string MarketId)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "GET",
                    Url = _client.ApiBaseUrl + "/market/{MarketId}/information",
                    QueryString = new QueryString(new NameValuePair("MarketId", MarketId))
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<GetMarketInformationResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<GetMarketInformationResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // ListMarketInformationSearch
        // ***********************************


        /// <summary>
        /// Returns market information for the markets that meet the search criteria. The search can be performed by market code and/or market name, and can include CFDs and Spread Bet markets.
        /// </summary>
        /// <param name="searchByMarketCode">Sets the search to use market code.</param>
        /// <param name="searchByMarketName">Sets the search to use market Name.</param>
        /// <param name="spreadProductType">Sets the search to include spread bet markets.</param>
        /// <param name="cfdProductType">Sets the search to include CFD markets.</param>
        /// <param name="binaryProductType">Sets the search to include binary markets.</param>
        /// <param name="includeOptions">When set to true, the search captures and returns options markets. When set to false, options markets are excluded from the search results.</param>
        /// <param name="query">The text to search for. Matches part of market name / code from the start.</param>
        /// <param name="maxResults">The maximum number of results to return.</param>
        /// <param name="useMobileShortName">True if the market name should be in short form.  Helpful when displaying data on a small screen.</param>
        public virtual Task<ListMarketInformationSearchResponseDTO> ListMarketInformationSearchAsync(bool searchByMarketCode, bool searchByMarketName, bool spreadProductType, bool cfdProductType, bool binaryProductType, bool includeOptions, string query, int maxResults, bool useMobileShortName)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "GET",
                    Url = _client.ApiBaseUrl + "/market/informationsearch?SearchByMarketCode={searchByMarketCode}&SearchByMarketName={searchByMarketName}&SpreadProductType={spreadProductType}&CfdProductType={cfdProductType}&BinaryProductType={binaryProductType}&IncludeOptions={includeOptions}&Query={query}&MaxResults={maxResults}&UseMobileShortName={useMobileShortName}",
                    QueryString = new QueryString(new NameValuePair("searchByMarketCode", searchByMarketCode), new NameValuePair("searchByMarketName", searchByMarketName), new NameValuePair("spreadProductType", spreadProductType), new NameValuePair("cfdProductType", cfdProductType), new NameValuePair("binaryProductType", binaryProductType), new NameValuePair("includeOptions", includeOptions), new NameValuePair("query", query), new NameValuePair("maxResults", maxResults), new NameValuePair("useMobileShortName", useMobileShortName))
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ListMarketInformationSearchResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ListMarketInformationSearchResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // ListMarketSearch
        // ***********************************


        /// <summary>
        /// Returns a list of markets that meet the search criteria. The search can be performed by market code and/or market name, and can include CFDs and Spread Bet markets. Leave the query string empty to return all markets available to the user.
        /// </summary>
        /// <param name="searchByMarketCode">Sets the search to use market code.</param>
        /// <param name="searchByMarketName">Sets the search to use market Name.</param>
        /// <param name="spreadProductType">Sets the search to include spread bet markets.</param>
        /// <param name="cfdProductType">Sets the search to include CFD markets.</param>
        /// <param name="binaryProductType">Sets the search to include binary markets.</param>
        /// <param name="includeOptions">When set to true, the search captures and returns options markets. When set to false, options markets are excluded from the search results.</param>
        /// <param name="query">The text to search for. Matches part of market name / code from the start. *(Optional)*.</param>
        /// <param name="maxResults">The maximum number of results to return.</param>
        /// <param name="useMobileShortName">True if the market name should be in short form.  Helpful when displaying data on a small screen.</param>
        public virtual Task<ListMarketSearchResponseDTO> ListMarketSearchAsync(bool searchByMarketCode, bool searchByMarketName, bool spreadProductType, bool cfdProductType, bool binaryProductType, bool includeOptions, string query, int maxResults, bool useMobileShortName)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "GET",
                    Url = _client.ApiBaseUrl + "/market/search?SearchByMarketCode={searchByMarketCode}&SearchByMarketName={searchByMarketName}&SpreadProductType={spreadProductType}&CfdProductType={cfdProductType}&BinaryProductType={binaryProductType}&IncludeOptions={includeOptions}&Query={query}&MaxResults={maxResults}&UseMobileShortName={useMobileShortName}",
                    QueryString = new QueryString(new NameValuePair("searchByMarketCode", searchByMarketCode), new NameValuePair("searchByMarketName", searchByMarketName), new NameValuePair("spreadProductType", spreadProductType), new NameValuePair("cfdProductType", cfdProductType), new NameValuePair("binaryProductType", binaryProductType), new NameValuePair("includeOptions", includeOptions), new NameValuePair("query", query), new NameValuePair("maxResults", maxResults), new NameValuePair("useMobileShortName", useMobileShortName))
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ListMarketSearchResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ListMarketSearchResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // SearchWithTags
        // ***********************************


        /// <summary>
        /// Get market information and tags for the markets that meet the search criteria. Leave the query string empty to return all markets and tags available to the user.
        /// </summary>
        /// <param name="query">The text to search for. Matches part of market name / code from the start. *(Optional)*.</param>
        /// <param name="tagId">The ID for the tag to be searched. *(Optional)*.</param>
        /// <param name="searchByMarketCode">Sets the search to use market code.</param>
        /// <param name="searchByMarketName">Sets the search to use market Name.</param>
        /// <param name="spreadProductType">Sets the search to include spread bet markets.</param>
        /// <param name="cfdProductType">Sets the search to include CFD markets.</param>
        /// <param name="binaryProductType">Sets the search to include binary markets.</param>
        /// <param name="includeOptions">When set to true, the search captures and returns options markets. When set to false, options markets are excluded from the search results.</param>
        /// <param name="maxResults">The maximum number of results to return. Default is 20.</param>
        /// <param name="useMobileShortName">True if the market name should be in short form. Helpful when displaying data on a small screen.</param>
        public virtual Task<MarketInformationSearchWithTagsResponseDTO> SearchWithTagsAsync(string query, int tagId, bool searchByMarketCode, bool searchByMarketName, bool spreadProductType, bool cfdProductType, bool binaryProductType, bool includeOptions, int maxResults, bool useMobileShortName)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "GET",
                    Url = _client.ApiBaseUrl + "/market/searchwithtags?Query={query}&TagId={tagId}&SearchByMarketCode={searchByMarketCode}&SearchByMarketName={searchByMarketName}&SpreadProductType={spreadProductType}&CfdProductType={cfdProductType}&BinaryProductType={binaryProductType}&IncludeOptions={includeOptions}&MaxResults={maxResults}&UseMobileShortName={useMobileShortName}",
                    QueryString = new QueryString(new NameValuePair("query", query), new NameValuePair("tagId", tagId), new NameValuePair("searchByMarketCode", searchByMarketCode), new NameValuePair("searchByMarketName", searchByMarketName), new NameValuePair("spreadProductType", spreadProductType), new NameValuePair("cfdProductType", cfdProductType), new NameValuePair("binaryProductType", binaryProductType), new NameValuePair("includeOptions", includeOptions), new NameValuePair("maxResults", maxResults), new NameValuePair("useMobileShortName", useMobileShortName))
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<MarketInformationSearchWithTagsResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<MarketInformationSearchWithTagsResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // TagLookup
        // ***********************************


        /// <summary>
        /// Gets all of the tags that the requesting user is allowed to see. Tags are returned in a primary / secondary hierarchy. There are no parameters in this call.
        /// </summary>
        public virtual Task<MarketInformationTagLookupResponseDTO> TagLookupAsync()
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "GET",
                    Url = _client.ApiBaseUrl + "/market/taglookup"
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<MarketInformationTagLookupResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<MarketInformationTagLookupResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // ListMarketInformation
        // ***********************************


        /// <summary>
        /// Get Market Information for the specified list of markets.
        /// </summary>
        /// <param name="listMarketInformationRequestDTO">Get Market Information for the specified list of markets.</param>
        public virtual Task<ListMarketInformationResponseDTO> ListMarketInformationAsync(ListMarketInformationRequestDTO listMarketInformationRequestDTO)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "POST",
                    Url = _client.ApiBaseUrl + "/market/information",
                    PostData = new PostData{
                       MimeType = "application/json",
                       Params = new Parameters(new NameValuePair("", listMarketInformationRequestDTO))
                    }
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ListMarketInformationResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ListMarketInformationResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // SaveMarketInformation
        // ***********************************


        /// <summary>
        /// Save Market Information for the specified list of markets.
        /// </summary>
        /// <param name="listMarketInformationRequestSaveDTO">Save Market Information for the specified list of markets.</param>
        public virtual Task<ApiSaveMarketInformationResponseDTO> SaveMarketInformationAsync(SaveMarketInformationRequestDTO listMarketInformationRequestSaveDTO)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "POST",
                    Url = _client.ApiBaseUrl + "/market/information/save",
                    PostData = new PostData{
                       MimeType = "application/json",
                       Params = new Parameters(new NameValuePair("", listMarketInformationRequestSaveDTO))
                    }
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ApiSaveMarketInformationResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ApiSaveMarketInformationResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        }            
        public class _Preference
        {
            private Client _client;
            public _Preference(Client client){ this._client = client;}

        // ***********************************
        // Save
        // ***********************************


        /// <summary>
        /// Save client preferences.
        /// </summary>
        /// <param name="saveClientPreferenceRequestDTO">The client preferences key/value pairs to save.</param>
        public virtual Task<UpdateDeleteClientPreferenceResponseDTO> SaveAsync(SaveClientPreferenceRequestDTO saveClientPreferenceRequestDTO)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "POST",
                    Url = _client.ApiBaseUrl + "/clientpreference/save",
                    PostData = new PostData{
                       MimeType = "application/json",
                       Params = new Parameters(new NameValuePair("", saveClientPreferenceRequestDTO))
                    }
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<UpdateDeleteClientPreferenceResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<UpdateDeleteClientPreferenceResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // Get
        // ***********************************


        /// <summary>
        /// Get client preferences.
        /// </summary>
        /// <param name="clientPreferenceRequestDto">The client preference key to get.</param>
        public virtual Task<GetClientPreferenceResponseDTO> GetAsync(ClientPreferenceRequestDTO clientPreferenceRequestDto)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "POST",
                    Url = _client.ApiBaseUrl + "/clientpreference/get",
                    PostData = new PostData{
                       MimeType = "application/json",
                       Params = new Parameters(new NameValuePair("", clientPreferenceRequestDto))
                    }
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<GetClientPreferenceResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<GetClientPreferenceResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // GetKeyList
        // ***********************************


        /// <summary>
        /// Get list of client preferences keys. There are no parameters in this call.
        /// </summary>
        public virtual Task<GetKeyListClientPreferenceResponseDTO> GetKeyListAsync()
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "GET",
                    Url = _client.ApiBaseUrl + "/clientpreference/getkeylist"
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<GetKeyListClientPreferenceResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<GetKeyListClientPreferenceResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // Delete
        // ***********************************


        /// <summary>
        /// Delete client preference key.
        /// </summary>
        /// <param name="clientPreferenceKey">The client preference key to delete.</param>
        public virtual Task<UpdateDeleteClientPreferenceResponseDTO> DeleteAsync(ClientPreferenceRequestDTO clientPreferenceKey)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "POST",
                    Url = _client.ApiBaseUrl + "/clientpreference/delete",
                    PostData = new PostData{
                       MimeType = "application/json",
                       Params = new Parameters(new NameValuePair("", clientPreferenceKey))
                    }
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<UpdateDeleteClientPreferenceResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<UpdateDeleteClientPreferenceResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        }            
        public class _TradesAndOrders
        {
            private Client _client;
            public _TradesAndOrders(Client client){ this._client = client;}

        // ***********************************
        // Order
        // ***********************************


        /// <summary>
        /// Place an order on a particular market. Do not set any order ID fields when requesting a new order, the platform will generate them.
        /// </summary>
        /// <param name="order">The order request.</param>
        public virtual Task<ApiTradeOrderResponseDTO> OrderAsync(NewStopLimitOrderRequestDTO order)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "POST",
                    Url = _client.ApiBaseUrl + "/order/newstoplimitorder",
                    PostData = new PostData{
                       MimeType = "application/json",
                       Params = new Parameters(new NameValuePair("", order))
                    }
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ApiTradeOrderResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ApiTradeOrderResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // CancelOrder
        // ***********************************


        /// <summary>
        /// Cancel an order.
        /// </summary>
        /// <param name="cancelOrder">The cancel order request.</param>
        public virtual Task<ApiTradeOrderResponseDTO> CancelOrderAsync(CancelOrderRequestDTO cancelOrder)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "POST",
                    Url = _client.ApiBaseUrl + "/order/cancel",
                    PostData = new PostData{
                       MimeType = "application/json",
                       Params = new Parameters(new NameValuePair("", cancelOrder))
                    }
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ApiTradeOrderResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ApiTradeOrderResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // UpdateOrder
        // ***********************************


        /// <summary>
        /// Update an order *(for adding a stop/limit or attaching an OCO relationship)*.
        /// </summary>
        /// <param name="order">The update order request.</param>
        public virtual Task<ApiTradeOrderResponseDTO> UpdateOrderAsync(UpdateStopLimitOrderRequestDTO order)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "POST",
                    Url = _client.ApiBaseUrl + "/order/updatestoplimitorder",
                    PostData = new PostData{
                       MimeType = "application/json",
                       Params = new Parameters(new NameValuePair("", order))
                    }
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ApiTradeOrderResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ApiTradeOrderResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // ListOpenPositions
        // ***********************************


        /// <summary>
        /// Queries for a specified trading account's trades / open positions. This URI is intended to support a grid in a UI. One usage pattern is to subscribe to streaming orders, call this for the initial data to display in the grid, and call the HTTP service [GetOpenPosition](http://labs.cityindex.com/docs/Content/HTTP%20Services/GetOpenPosition.htm) when you get updates on the order stream to get the updated data in this format. **Notes on Parameters** >**ClientAccountId** - this can be passed in order to retrieve all information on all trading accounts for which it is the parent. >**TradingAccountId** - this can be passed to retrieve information specific to a certain trading account *(the child of ClientAccount)*.  If *neither* ClientAccountId nor TradingAccountId is passed, then the information returned by default from the API is ClientAccount.
        /// </summary>
        /// <param name="TradingAccountId">The ID of the trading account to get orders for.</param>
        public virtual Task<ListOpenPositionsResponseDTO> ListOpenPositionsAsync(int TradingAccountId)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "GET",
                    Url = _client.ApiBaseUrl + "/order/openpositions?TradingAccountId={TradingAccountId}",
                    QueryString = new QueryString(new NameValuePair("TradingAccountId", TradingAccountId))
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ListOpenPositionsResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ListOpenPositionsResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // ListActiveStopLimitOrders
        // ***********************************


        /// <summary>
        /// Queries for a specified trading account's active stop / limit orders. This URI is intended to support a grid in a UI. One usage pattern is to subscribe to streaming orders, call this for the initial data to display in the grid, and call the HTTP service [GetActiveStopLimitOrder](http://labs.cityindex.com/docs/Content/HTTP%20Services/GetActiveStopLimitOrder.htm) when you get updates on the order stream to get the updated data in this format. **Notes on Parameters** >**ClientAccountId** - this can be passed in order to retrieve all information on all trading accounts for which it is the parent. >**TradingAccountId** - this can be passed to retrieve information specific to a certain trading account *(the child of ClientAccount)*.  If *neither* ClientAccountId nor TradingAccountId is passed, then the information returned by default from the API is ClientAccount.
        /// </summary>
        /// <param name="TradingAccountId">The ID of the trading account to get orders for.</param>
        public virtual Task<ListActiveStopLimitOrderResponseDTO> ListActiveStopLimitOrdersAsync(int TradingAccountId)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "GET",
                    Url = _client.ApiBaseUrl + "/order/activestoplimitorders?TradingAccountId={TradingAccountId}",
                    QueryString = new QueryString(new NameValuePair("TradingAccountId", TradingAccountId))
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ListActiveStopLimitOrderResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ListActiveStopLimitOrderResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // GetActiveStopLimitOrder
        // ***********************************


        /// <summary>
        /// Queries for an active stop limit order with a specified order ID. It returns a null value if the order doesn't exist, or is not an active stop limit order. This URI is intended to support a grid in a UI. One usage pattern is to subscribe to streaming orders, call the HTTP service [ListActiveStopLimitOrders](http://labs.cityindex.com/docs/Content/HTTP%20Services/ListActiveStopLimitOrders.htm) for the initial data to display in the grid, and call this URI when you get updates on the order stream to get the updated data in this format. For a more comprehensive order response, see the HTTP service [GetOrder](http://labs.cityindex.com/docs/Content/HTTP%20Services/GetOrder.htm).
        /// </summary>
        /// <param name="OrderId">The requested order ID.</param>
        public virtual Task<GetActiveStopLimitOrderResponseDTO> GetActiveStopLimitOrderAsync(string OrderId)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "GET",
                    Url = _client.ApiBaseUrl + "/order/{OrderId}/activestoplimitorder",
                    QueryString = new QueryString(new NameValuePair("OrderId", OrderId))
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<GetActiveStopLimitOrderResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<GetActiveStopLimitOrderResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // GetOpenPosition
        // ***********************************


        /// <summary>
        /// Queries for a trade / open position with a specified order ID. It returns a null value if the order doesn't exist, or is not a trade / open position. This URI is intended to support a grid in a UI. One usage pattern is to subscribe to streaming orders, call the HTTP service [ListOpenPositions](http://labs.cityindex.com/docs/Content/HTTP%20Services/ListOpenPositions.htm) for the initial data to display in the grid, and call this URI when you get updates on the order stream to get the updated data in this format. For a more comprehensive order response, see the HTTP service [GetOrder](http://labs.cityindex.com/docs/Content/HTTP%20Services/GetOrder.htm).
        /// </summary>
        /// <param name="OrderId">The requested order ID.</param>
        public virtual Task<GetOpenPositionResponseDTO> GetOpenPositionAsync(string OrderId)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "GET",
                    Url = _client.ApiBaseUrl + "/order/{OrderId}/openposition",
                    QueryString = new QueryString(new NameValuePair("OrderId", OrderId))
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<GetOpenPositionResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<GetOpenPositionResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // ListTradeHistory
        // ***********************************


        /// <summary>
        /// Queries for a specified trading account's trade history. The result set will contain orders with a status of __(3 - Open, 9 - Closed)__, and includes __orders that were a trade / stop / limit order__. There's currently no corresponding GetTradeHistory *(as with [ListOpenPositions](http://labs.cityindex.com/docs/Content/HTTP%20Services/ListOpenPositions.htm))*. **Notes on Parameters** >**ClientAccountId** - this can be passed in order to retrieve all information on all trading accounts for which it is the parent. >**TradingAccountId** - this can be passed to retrieve information specific to a certain trading account *(the child of ClientAccount)*.  If *neither* ClientAccountId nor TradingAccountId is passed, then the information returned by default from the API is ClientAccount.
        /// </summary>
        /// <param name="TradingAccountId">The ID of the trading account to get orders for.</param>
        /// <param name="maxResults">The maximum number of results to return.</param>
        public virtual Task<ListTradeHistoryResponseDTO> ListTradeHistoryAsync(int TradingAccountId, int maxResults)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "GET",
                    Url = _client.ApiBaseUrl + "/order/order/tradehistory?TradingAccountId={TradingAccountId}&MaxResults={maxResults}",
                    QueryString = new QueryString(new NameValuePair("TradingAccountId", TradingAccountId), new NameValuePair("maxResults", maxResults))
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ListTradeHistoryResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ListTradeHistoryResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // ListStopLimitOrderHistory
        // ***********************************


        /// <summary>
        /// Queries for a specified trading account's stop / limit order history. The result set includes __only orders that were originally stop / limit orders__ that currently have one of the following statuses __(3 - Open, 4 - Cancelled, 5 - Rejected, 9 - Closed, 10 - Red Card)__.  There is currently no corresponding GetStopLimitOrderHistory *(as with [ListActiveStopLimitOrders](http://labs.cityindex.com/docs/Content/HTTP%20Services/ListActiveStopLimitOrders.htm))*. **Notes on Parameters** >**ClientAccountId** - this can be passed in order to retrieve all information on all trading accounts for which it is the parent. >**TradingAccountId** - this can be passed to retrieve information specific to a certain trading account *(the child of ClientAccount)*.  If *neither* ClientAccountId nor TradingAccountId is passed, then the information returned by default from the API is ClientAccount.
        /// </summary>
        /// <param name="TradingAccountId">The ID of the trading account to get orders for.</param>
        /// <param name="maxResults">The maximum number of results to return.</param>
        public virtual Task<ListStopLimitOrderHistoryResponseDTO> ListStopLimitOrderHistoryAsync(int TradingAccountId, int maxResults)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "GET",
                    Url = _client.ApiBaseUrl + "/order/stoplimitorderhistory?TradingAccountId={TradingAccountId}&MaxResults={maxResults}",
                    QueryString = new QueryString(new NameValuePair("TradingAccountId", TradingAccountId), new NameValuePair("maxResults", maxResults))
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ListStopLimitOrderHistoryResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ListStopLimitOrderHistoryResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // GetOrder
        // ***********************************


        /// <summary>
        /// Queries for an order by a specific order ID. The current implementation only returns active orders *(i.e. those with a status of __1 - Pending, 2 - Accepted, 3 - Open, 6 - Suspended, 8 - Yellow Card, 11 - Triggered__)*.
        /// </summary>
        /// <param name="OrderId">The requested order ID.</param>
        public virtual Task<GetOrderResponseDTO> GetOrderAsync(string OrderId)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "GET",
                    Url = _client.ApiBaseUrl + "/order/{OrderId}",
                    QueryString = new QueryString(new NameValuePair("OrderId", OrderId))
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<GetOrderResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<GetOrderResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // Trade
        // ***********************************


        /// <summary>
        /// Place a trade on a particular market. Do not set any order ID fields when requesting a new trade, the platform will generate them.
        /// </summary>
        /// <param name="trade">The trade request.</param>
        public virtual Task<ApiTradeOrderResponseDTO> TradeAsync(NewTradeOrderRequestDTO trade)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "POST",
                    Url = _client.ApiBaseUrl + "/order/newtradeorder",
                    PostData = new PostData{
                       MimeType = "application/json",
                       Params = new Parameters(new NameValuePair("", trade))
                    }
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ApiTradeOrderResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ApiTradeOrderResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // UpdateTrade
        // ***********************************


        /// <summary>
        /// Update a trade *(for adding a stop/limit etc)*.
        /// </summary>
        /// <param name="update">The update trade request.</param>
        public virtual Task<ApiTradeOrderResponseDTO> UpdateTradeAsync(UpdateTradeOrderRequestDTO update)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "POST",
                    Url = _client.ApiBaseUrl + "/order/updatetradeorder",
                    PostData = new PostData{
                       MimeType = "application/json",
                       Params = new Parameters(new NameValuePair("", update))
                    }
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ApiTradeOrderResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ApiTradeOrderResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // SimulateTrade
        // ***********************************


        /// <summary>
        /// API call that allows a simulated new trade to be placed.
        /// </summary>
        /// <param name="Trade">The simulated trade request.</param>
        public virtual Task<ApiSimulateTradeOrderResponseDTO> SimulateTradeAsync(NewTradeOrderRequestDTO Trade)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "POST",
                    Url = _client.ApiBaseUrl + "/order/simulate/newtradeorder",
                    PostData = new PostData{
                       MimeType = "application/json",
                       Params = new Parameters(new NameValuePair("", Trade))
                    }
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ApiSimulateTradeOrderResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ApiSimulateTradeOrderResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        }            
        public class _AccountInformation
        {
            private Client _client;
            public _AccountInformation(Client client){ this._client = client;}

        // ***********************************
        // GetClientAndTradingAccount
        // ***********************************


        /// <summary>
        /// Returns the User's ClientAccountId and a list of their TradingAccounts. There are no parameters for this call.
        /// </summary>
        public virtual Task<AccountInformationResponseDTO> GetClientAndTradingAccountAsync()
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "GET",
                    Url = _client.ApiBaseUrl + "/useraccount/ClientAndTradingAccount"
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<AccountInformationResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<AccountInformationResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // SaveAccountInformation
        // ***********************************


        /// <summary>
        /// Saves the users account information.
        /// </summary>
        /// <param name="saveAccountInformationRequest">Saves the users account information.</param>
        public virtual Task<ApiSaveAccountInformationResponseDTO> SaveAccountInformationAsync(ApiSaveAccountInformationRequestDTO saveAccountInformationRequest)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "POST",
                    Url = _client.ApiBaseUrl + "/useraccount/Save",
                    PostData = new PostData{
                       MimeType = "application/json",
                       Params = new Parameters(new NameValuePair("", saveAccountInformationRequest))
                    }
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ApiSaveAccountInformationResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ApiSaveAccountInformationResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        }            
        public class _Messaging
        {
            private Client _client;
            public _Messaging(Client client){ this._client = client;}

        // ***********************************
        // GetSystemLookup
        // ***********************************


        /// <summary>
        /// Use the message lookup service to get localised text names for the various status codes & IDs returned by the API. For example, a query for **OrderStatusReason** will contain text names for all the possible values of **OrderStatusReason** in the [ApiOrderResponseDTO](http://labs.cityindex.com/docs/Content/Data%20Types/ApiOrderResponseDTO.htm). You should only request the list once per session *(for each entity you're interested in)*.
        /// </summary>
        /// <param name="LookupEntityName">The entity to lookup. For example: **OrderStatusReason**, **InstructionStatusReason**, **OrderApplicability**, **Currency**, **QuoteStatus**, **QuoteStatusReason** or **Culture**.</param>
        /// <param name="CultureId">The Culture ID used to override the translated text description. *(Optional)*.</param>
        public virtual Task<ApiLookupResponseDTO> GetSystemLookupAsync(string LookupEntityName, int CultureId)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "GET",
                    Url = _client.ApiBaseUrl + "/message/lookup?LookupEntityName={LookupEntityName}&CultureId={CultureId}",
                    QueryString = new QueryString(new NameValuePair("LookupEntityName", LookupEntityName), new NameValuePair("CultureId", CultureId))
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ApiLookupResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ApiLookupResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // GetClientApplicationMessageTranslation
        // ***********************************


        /// <summary>
        /// Use the message translation service to get client specific translated text strings.
        /// </summary>
        /// <param name="ClientApplicationId">Client application identifier. *(Optional)*</param>
        /// <param name="CultureId">Culture ID which corresponds to a culture code. *(Optional)*</param>
        /// <param name="AccountOperatorId">Account operator identifier. *(Optional)*</param>
        public virtual Task<ApiClientApplicationMessageTranslationResponseDTO> GetClientApplicationMessageTranslationAsync(int ClientApplicationId, int CultureId, int AccountOperatorId)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "GET",
                    Url = _client.ApiBaseUrl + "/message/translation?ClientApplicationId={ClientApplicationId}&CultureId={CultureId}&AccountOperatorId={AccountOperatorId}",
                    QueryString = new QueryString(new NameValuePair("ClientApplicationId", ClientApplicationId), new NameValuePair("CultureId", CultureId), new NameValuePair("AccountOperatorId", AccountOperatorId))
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ApiClientApplicationMessageTranslationResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ApiClientApplicationMessageTranslationResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // GetClientApplicationMessageTranslationWithInterestingItems
        // ***********************************


        /// <summary>
        /// Use the message translation service to get client specific translated textual strings for specific keys.
        /// </summary>
        /// <param name="apiClientApplicationMessageTranslationRequestDto">DTO of the required data for translation lookup.</param>
        public virtual Task<ApiClientApplicationMessageTranslationResponseDTO> GetClientApplicationMessageTranslationWithInterestingItemsAsync(ApiClientApplicationMessageTranslationRequestDTO apiClientApplicationMessageTranslationRequestDto)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "POST",
                    Url = _client.ApiBaseUrl + "/message/translationWithInterestingItems",
                    PostData = new PostData{
                       MimeType = "application/json",
                       Params = new Parameters(new NameValuePair("", apiClientApplicationMessageTranslationRequestDto))
                    }
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ApiClientApplicationMessageTranslationResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ApiClientApplicationMessageTranslationResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        }            
        public class _Watchlist
        {
            private Client _client;
            public _Watchlist(Client client){ this._client = client;}

        // ***********************************
        // GetWatchlists
        // ***********************************


        /// <summary>
        /// Gets all watchlists for the user account. There are no parameters for this call.
        /// </summary>
        public virtual Task<ListWatchlistResponseDTO> GetWatchlistsAsync()
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "GET",
                    Url = _client.ApiBaseUrl + "/watchlists/"
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ListWatchlistResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ListWatchlistResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // SaveWatchlist
        // ***********************************


        /// <summary>
        /// Save watchlist.
        /// </summary>
        /// <param name="apiSaveWatchlistRequestDto">The watchlist to save.</param>
        public virtual Task<ApiSaveWatchlistResponseDTO> SaveWatchlistAsync(ApiSaveWatchlistRequestDTO apiSaveWatchlistRequestDto)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "POST",
                    Url = _client.ApiBaseUrl + "/watchlist/Save",
                    PostData = new PostData{
                       MimeType = "application/json",
                       Params = new Parameters(new NameValuePair("", apiSaveWatchlistRequestDto))
                    }
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ApiSaveWatchlistResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ApiSaveWatchlistResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        // ***********************************
        // DeleteWatchlist
        // ***********************************


        /// <summary>
        /// Delete a watchlist.
        /// </summary>
        /// <param name="deleteWatchlistRequestDto">The watchlist to delete.</param>
        public virtual Task<ApiDeleteWatchlistResponseDTO> DeleteWatchlistAsync(ApiDeleteWatchlistRequestDTO deleteWatchlistRequestDto)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "POST",
                    Url = _client.ApiBaseUrl + "/watchlist/delete",
                    PostData = new PostData{
                       MimeType = "application/json",
                       Params = new Parameters(new NameValuePair("", deleteWatchlistRequestDto))
                    }
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<ApiDeleteWatchlistResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<ApiDeleteWatchlistResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        }            
        public class _ClientApplication
        {
            private Client _client;
            public _ClientApplication(Client client){ this._client = client;}

        // ***********************************
        // GetVersionInformation
        // ***********************************


        /// <summary>
        /// Gets version information for a specific client application and *(optionally)* account operator.
        /// </summary>
        /// <param name="AppKey">A string to uniquely identify the application.</param>
        /// <param name="AccountOperatorId">An optional parameter to identify the account operator string to uniquely identify the application.</param>
        public virtual Task<GetVersionInformationResponseDTO> GetVersionInformationAsync(string AppKey, int AccountOperatorId)
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "GET",
                    Url = _client.ApiBaseUrl + "/clientapplication/versioninformation?AppKey={AppKey}&AccountOperatorId={AccountOperatorId}",
                    QueryString = new QueryString(new NameValuePair("AppKey", AppKey), new NameValuePair("AccountOperatorId", AccountOperatorId))
                }
            };


            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);

            Task<GetVersionInformationResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var data =
                        JsonConvert.DeserializeObject<GetVersionInformationResponseDTO>(task.Result.Response.Content.Text);
                    return data;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }


        }            
    }
}