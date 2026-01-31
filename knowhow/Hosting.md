---
title:  Hosting
layout: single
sidebar:
  nav: environment
---
##  環境

  |Machine        |Env / FW                |Last Updated
  |---------------|------------------------|----------
  |Windows Insider|Google Cloud SDK 554.0.0|2026/01/30

##  ノウハウ

##  [Vercel](https://vercel.com/)

  |Verify                   |FW              |Last Updated
  |-------------------------|----------------|----------
  |ReactGrid / ChartJs      |Next.js 16.0.0  |[2025/10/22](https://next-grid-chart.vercel.app/)
  |                         |Astro 5.14.1    |[2025/09/27](https://astro-react-grid-chart.vercel.app/)
  |D3 / ChartJS / Recharts  |React 19.2.0    |[2025/10/18](https://graph-libraries.vercel.app/)
  |InputField(Full-Width)   |React 19.1.0    |[2025/05/22](https://ya-full-width-input-field.vercel.app/)
  |                         |Vue 3.5.22      |[2025/10/07](https://ya-full-width-input-field-for-vue.vercel.app/)
  |InputField(AutoComplete) |React 19.1.1    |[2025/08/07](https://auto-complete-input-field.vercel.app/)

### Google Cloud
- [Google Cloud CLI](https://docs.cloud.google.com/sdk/docs/install-sdk?hl=ja)
  ```
  (New-Object Net.WebClient).DownloadFile("https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe", "$env:Temp\GoogleCloudSDKInstaller.exe")

  & $env:Temp\GoogleCloudSDKInstaller.exe
  ```

### Azure
- [Azureポータル](https://portal.azure.com/#home)
- [Visual Studio Code を使用して Azure Functions を開発する](https://learn.microsoft.com/ja-jp/azure/azure-functions/functions-develop-vs-code?tabs=csharp)
  ![ブラウザから実行してみた](/images/Azure/20230701_FunctionsTrial.png)

### Oracle Cloud
- 接続スクリプト[<span style="color: red;">*2023/2/24*</span>]

  [Oracle Cloud](https://www.oracle.com/jp/cloud/)にUbuntuインスタンスを作成したので、[インスタンスへの接続](https://docs.oracle.com/ja-jp/iaas/Content/Compute/Tasks/accessinginstance.htm)を参照し、接続するためのスクリプトを作成。
  
  ```
  ssh -i <SSH KeyFile> ubuntu@<IP Address>
  ```
- PowerShellのプロファイル

  作成したスクリプトを簡単に呼び出せるよう、PowerShellにプロファイルを設定。
  ![プロファイル設定](/images/OCI/PowerShell_OCI_Ubuntu_20230224_231606.png)

  プロファイルにしておけば、PowerShellを起動して、プロファイルを選択することで接続できる。
  ![プロファイル選択](/images/OCI/PowerShell_Profile_20230224_232526.png)
