## Prerequisites
The **UI5 build and development tooling command line interface (UI5 CLI)** has to be installed.
For installation instructions please see [Installing the UI5 CLI](https://github.com/SAP/ui5-tooling#installing-the-ui5-cli).

## Setup
1. Clone the repository and navigate into it
    ```sh
    git clone https://github.com/SAP/openui5-masterdetail-app.git
    cd openui5-masterdetail-app
    ```
1. Install all dependencies
    ```sh
    npm install
    ```

1. Start a local server and run the application (http://localhost:8080/index.html)
    ```sh
    ui5 serve -o /index.html
    ```

1. Configure data source. Set uri and localUri for the meta data.
	```json
	"dataSources": {
		"mainService": {
			"uri": "https://cors-anywhere.herokuapp.com/https://services.odata.org/V2/(S(qjoxeb03mev4wjl2ls04k32m))/OData/OData.svc/",
			"type": "OData",
			"settings": {
				"odataVersion": "2.0",
                    		"localUri": "localService/product-metadata.xml",
                    		"useBatch": false
			}
		}
	}
	```
