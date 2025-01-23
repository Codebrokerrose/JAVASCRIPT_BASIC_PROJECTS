
        if (typeof (rateCalc) !== 'object') {
            rateCalc = {};
        }

        rateCalc.srcWelcomeMessageVersion = '46';
        rateCalc.isShowNewToNRCMessage = false;
        rateCalc.notificationMessage = "Test Message for release 9/18/2024";
        rateCalc.isBranded = false;
        var loanEstimateOptionList = {"default":{"1":[1,1,1,0]},"current":[0,0,0,0]};
        var isSaveDocumentPDF = false;
        rateCalc.networkID = '';
        rateCalc.quoteType = 3;
        var closingSheetLookup;
        rateCalc.urlParams = '&amp;refID=http://www.stewart.com/content/stewart/stewartcom/en/quick-links/rate-calculator.html&amp;branded=false';
        rateCalc.quoteRequestRoot =  {"QuoteRequest":{"@version":3.0,"TransactionInformation":{"TransactionDateTime":"0001-01-01T00:00:00","ClientReferenceNumber":"http://www.stewart.com/content/stewart/stewartcom/en/quick-links/rate-calculator.html","StewartReferenceNumber":"59778dd1-e986-46b6-9ade-08546cf5ba09","ProviderID":"","CustomerName":"","ClosingDate":"0001-01-01T00:00:00","TransactionTypeCode":"","TransactionTypeDescription":"","FeeItemTypeList":{"FeeItemType":[]}},"PropertyAddress":{"CityName":"","CountyCode":"","StateCode":"","ZipCode":""},"PolicyInfo":{"IsSimultaneous":"False","PolicyList":{"Policy":[]}},"Recording":{"QuestionList":{"Question":[]},"MortgageNumPages":"","DeedNumPages":"","ReleaseNumPages":"","CountyName":"","PageRec":"","OriginalDebt":"","UnpaidBalance":"","IsTorren":"","Subjurisdiction":"","LandSystem":"","FairMarketValue":""},"Internal":{"UnderwriterName":"","FeeItemName":"","Commercial":"","Reverse":false,"UserRole":0,"UserEmail":"","HostNetworkGUID":""}}};
        rateCalc.propertyCountyName = '';
        rateCalc.transactionTypeConfig = {
  "TransactionTypeConfig": [
    {
      "Code": "SALE",
      "IsBuyerNetSheet": true,
      "IsSellerNetSheet": true,
      "IsTEFE": true
    },
    {
      "Code": "REFI",
      "IsBuyerNetSheet": false,
      "IsSellerNetSheet": false,
      "IsTEFE": true
    },
    {
      "Code": "CASH",
      "IsBuyerNetSheet": true,
      "IsSellerNetSheet": true,
      "IsTEFE": true
    },
    {
      "Code": "LEASEHOLD",
      "IsBuyerNetSheet": false,
      "IsSellerNetSheet": false,
      "IsTEFE": true
    },
    {
      "Code": "CONSTRUCTION",
      "IsBuyerNetSheet": false,
      "IsSellerNetSheet": false,
      "IsTEFE": true
    },
    {
      "Code": "CONSTRUCTIONREFI",
      "IsBuyerNetSheet": false,
      "IsSellerNetSheet": false,
      "IsTEFE": true
    }
  ]
};
        rateCalc.isPropertySearchRequired = false;
        rateCalc.allowNetSheet = true;
        rateCalc.allowTEFE = true;
        rateCalc.negotiatedProviderID = '';
        rateCalc.negotiatedProvider;
        rateCalc.clientAccountConfig = {
  "ClientAccount": {
    "IsInternal": true
  }
};
