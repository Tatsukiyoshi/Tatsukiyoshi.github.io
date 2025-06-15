#   Oracle Cloud

##  ノウハウ
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
