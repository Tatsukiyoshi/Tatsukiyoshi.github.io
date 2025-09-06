---
title:  Java
layout: single
sidebar:
  nav: main
---
##  独学書

  |Text                     |Date      |Status
  |-------------------------|----------|--------
  |Spring解体新書（第２版）   |2022/10/23|8章 MyBatis <span style="color: red;">*finished*</span>
  |Spring解体新書（バッチ編） |2022/05/07|6章 バッチ実行 <span style="color: red;">*finished*</span> ->[コード](https://github.com/Tatsukiyoshi/Weekend_Programming/tree/main/java/sts-workspace)
  |サーブレット＆JSP入門      |2022/10/07|*finished* ->[コード](https://github.com/Tatsukiyoshi/Weekend_Programming/tree/main/java/web-workspace)
  |Java本格入門              |2022/09/25|*finished* ->[コード](https://github.com/Tatsukiyoshi/Weekend_Programming/tree/main/java/eclipse-workspace)

##  環境

  |Machine         |Env / FW                                                                        |Last Updated
  |----------------|--------------------------------------------------------------------------------|----------
  |Windows Insider |[Pleiades All in One Eclipse Standard Edition 2025-03 (Eclipse 4.35)](#pleiades)|[2025/03/21](https://willbrains.jp/)
  |                |[Apache Tomcat 10.1.39](#tomcat)                                                |[2025/03/21](https://tomcat.apache.org/download-10.cgi)
  |                |[H2 Database 2.2.232](#h2-database)                                             |[2024/11/16](https://www.h2database.com/html/main.html)
  |                |Amazon Coretto 22.0.1                                                           |[2024/05/04](https://docs.aws.amazon.com/corretto/index.html)
  |                |[Jenkins LTS 2.479.2](#jenkins)                                                 |[2024/12/07](https://www.jenkins.io/download/)

##  ノウハウ
### [Java Platform Support](https://marketplace.visualstudio.com/items?itemName=Oracle.oracle-java)
  - VSCode拡張機能からインストール
    ![Java Platform Support](/images/Java/20231022_JavaPlatformSupport.png)
  - インストールすると、JDKがインストール済みかチェック<BR>
    インストールしていないので、エラーメッセージが出る
    ![No JDK](/images/Java/20231022_JavaPlatformSupport_NoJDK.png)
  - OKをクリックした後、右下にJDKのダウンロードを促す通知が出る！
    ![JDK Downloader通知](/images/Java/20231022_JavaPlatformSupport_NoJDK2.png)
  - 「Downloade JDK and setup automatically」をクリックすると、「JDK Downloader」画面が表示される
    ![JDK Downloader](/images/Java/20231022_JavaPlatformSupport_JDKDownloader.png)
  - 「Download Oracle OpenJDK」を選択すると、バージョン等が表示される <BR>
    問題なければ、「Install and start setup」をクリック
    ![JDK Downloader2](/images/Java/20231022_JavaPlatformSupport_JDKDownloader2.png)
  - インストール結果が右下に通知され、完了したので、「Reload now」をクリックして、再読み込みを行う <BR>
    ![Restart](/images/Java/20231022_JavaPlatformSupport_JDKDownloader3.png)

  <details>
  <summary>
  VSCodeログ
  </summary>

  ```shell
  Initiating server activation
  Request to kill LSP server.
  Cannot kill: current process is None
  Launching Oracle Java SE Language Server with c:\JDK21\jdk-21.0.1 and userdir c:\Users\taish\AppData\Roaming\Code\User\workspaceStorage\908f8ce9467ce5b65f5bfff48f86aeab\Oracle.oracle-java
  LSP server launching: 14856
  LSP server user directory: c:\Users\taish\AppData\Roaming\Code\User\workspaceStorage\908f8ce9467ce5b65f5bfff48f86aeab\Oracle.oracle-java
  Code Name                                          Version                               State    
  -------------------------------------------------- ------------------------------------- ---------
  org.netbeans.modules.options.java                  1.36                                  Enabled  
  org.netbeans.modules.editor.settings.storage       1.74.0.1                              Enabled  
  org.netbeans.modules.xml.xdm                       1.56.0.1                              Enabled  
  org.netbeans.modules.csl.types                     1.22                                  Enabled  
  org.netbeans.swing.plaf                            1.64                                  Enabled  
  org.netbeans.modules.terminal                      1.49                                  Enabled  
  org.netbeans.modules.editor.document               1.31.0.3                              Enabled  
  org.netbeans.modules.extexecution                  1.71                                  Enabled  
  org.netbeans.api.java                              1.88                                  Enabled  
  org.netbeans.modules.languages.antlr               1.4                                   Enabled  
  org.netbeans.modules.project.ant.ui                1.87                                  Enabled  
  org.netbeans.html.presenters.spi                   1.8.1                                 Enabled  
  org.netbeans.modules.options.api                   1.67                                  Enabled  
  org.openide.modules                                7.70                                  Enabled  
  org.netbeans.modules.editor.guards                 1.55                                  Enabled  
  org.netbeans.spi.tasklist                          1.57.0.1                              Enabled  
  org.netbeans.modules.html.parser                   1.56.0.1                              Enabled  
  org.netbeans.modules.javascript2.debug             1.40                                  Enabled  
  org.netbeans.lib.nbjavac                           1.38.0.4.3                            Enabled  
  org.netbeans.modules.nbcode.integration            1.0                                   Enabled  
  org.netbeans.modules.maven.persistence             1.51                                  Enabled  
  org.netbeans.libs.graalsdk.system                  1.21                                  Installed
  org.openide.util.lookup                            8.56                                  Enabled  
  org.netbeans.modules.maven                         2.160.0.1.1                           Enabled  
  org.netbeans.modules.masterfs.nio2                 1.37                                  Enabled  
  org.netbeans.modules.javascript2.lexer             1.28                                  Enabled  
  org.netbeans.modules.debugger.jpda.projectsui      1.25                                  Enabled  
  org.netbeans.modules.web.common                    1.121                                 Enabled  
  org.netbeans.modules.java.openjdk.project          1.19                                  Enabled  
  org.netbeans.api.annotations.common                1.50                                  Enabled  
  org.netbeans.modules.nativeimage.api               0.14                                  Enabled  
  org.netbeans.modules.testng.ui                     1.31                                  Enabled  
  org.netbeans.core.netigso                          1.53                                  Enabled  
  org.netbeans.libs.jna.platform                     2.17                                  Enabled  
  org.netbeans.modules.refactoring.api               1.69.0.1                              Enabled  
  org.netbeans.api.xml.ui                            1.66                                  Enabled  
  org.netbeans.modules.server                        1.55                                  Enabled  
  org.netbeans.libs.jaxb                             1.53                                  Installed
  org.netbeans.modules.gradle.test                   1.18                                  Enabled  
  org.openide.execution                              9.25                                  Enabled  
  org.netbeans.modules.htmlui                        1.7                                   Installed
  org.netbeans.modules.classfile                     1.74                                  Enabled  
  org.netbeans.modules.gsf.codecoverage              1.54                                  Installed
  org.netbeans.spi.quicksearch                       1.49                                  Enabled  
  org.openide.windows                                6.99                                  Enabled  
  org.netbeans.modules.java.guards                   0.53                                  Installed
  org.apache.commons.logging                         1.2                                   Enabled  
  org.netbeans.modules.xml.multiview                 1.60.0.2                              Installed
  org.netbeans.modules.html                          1.83                                  Installed
  org.netbeans.modules.sampler                       1.36                                  Enabled  
  org.netbeans.modules.java.sourceui                 1.70.0.2.4.3.32.6                     Enabled  
  org.netbeans.modules.gototest                      1.55                                  Enabled  
  org.netbeans.modules.editor.deprecated.pre65format 1.53.0.1.6.23.55                      Enabled  
  org.netbeans.modules.templates                     1.29                                  Enabled  
  org.netbeans.modules.xml.xam                       1.54.0.1                              Enabled  
  org.netbeans.modules.editor.errorstripe            2.56.0.1.1                            Enabled  
  org.netbeans.modules.project.libraries.ui          1.74                                  Enabled  
  org.netbeans.modules.projectapi                    1.93                                  Enabled  
  org.eclipse.jgit                                   5.7.0                                 Installed
  org.netbeans.modules.schema2beans                  1.69                                  Installed
  org.netbeans.modules.javadoc                       1.77.0.2                              Enabled  
  slf4j.api                                          1.7.36                                Enabled  
  org.openide.actions                                6.61                                  Enabled  
  org.netbeans.modules.java.source                   0.187.0.32.4.3.6.1                    Enabled  
  org.netbeans.modules.selenium2.webclient           1.29                                  Installed
  org.netbeans.modules.javascript2.model             1.28                                  Enabled  
  org.netbeans.modules.editor                        1.109.0.6.3.23.55                     Enabled  
  org.openide.loaders                                7.92                                  Enabled  
  org.netbeans.modules.versioning.core               1.53.0.1.42                           Installed
  org.netbeans.modules.java.debug                    1.60.0.1.3.6                          Enabled  
  org.openide.nodes                                  7.67                                  Enabled  
  org.netbeans.modules.keyring.fallback              1.30                                  Enabled  
  org.netbeans.swing.outline                         1.56                                  Enabled  
  org.netbeans.modules.versioning                    1.69.0.1                              Installed
  com.jcraft.jsch                                    0.1.72                                Installed
  org.netbeans.modules.languages.yaml                2.54                                  Enabled  
  org.openide.io                                     1.71                                  Enabled  
  org.netbeans.modules.projectuiapi.base             1.108.0.9                             Enabled  
  org.netbeans.libs.antlr3.runtime                   1.43.0.1                              Enabled  
  org.netbeans.modules.editor.codetemplates          1.66.0.1                              Enabled  
  org.netbeans.api.xml                               1.66                                  Enabled  
  org.netbeans.modules.java.testrunner               1.42                                  Enabled  
  org.netbeans.modules.maven.junit                   1.56                                  Enabled  
  net.java.html.geo                                  1.8.1                                 Installed
  org.netbeans.libs.testng                           1.36                                  Enabled  
  org.netbeans.modules.j2ee.persistenceapi           1.58.0.1                              Enabled  
  org.netbeans.modules.java.disco                    2.6                                   Enabled  
  org.netbeans.libs.jsch.agentproxy                  1.6                                   Installed
  org.netbeans.libs.asm                              5.25                                  Enabled  
  org.netbeans.lib.v8debug                           1.38                                  Installed
  org.netbeans.libs.flatlaf                          1.16                                  Enabled  
  org.netbeans.modules.favorites                     1.68                                  Enabled  
  org.netbeans.modules.gradle.persistence            1.18                                  Enabled  
  org.netbeans.modules.maven.indexer.ui              2.56                                  Enabled  
  org.netbeans.modules.db.metadata.model             1.33                                  Enabled  
  org.netbeans.modules.options.keymap                1.59                                  Enabled  
  org.netbeans.modules.project.spi.intern            1.25                                  Enabled  
  org.netbeans.modules.project.indexingbridge        1.39                                  Enabled  
  org.apache.commons.commons_io                      2.13.0                                Enabled  
  org.netbeans.libs.nbjavacapi                       21.0                                  Enabled  
  org.netbeans.modules.queries                       1.65                                  Enabled  
  org.netbeans.modules.libs.corba.omgapi             1.17                                  Enabled  
  org.netbeans.modules.project.ant                   1.89                                  Enabled  
  org.netbeans.modules.javascript2.doc               1.22                                  Enabled  
  org.netbeans.modules.editor.mimelookup             1.62                                  Enabled  
  org.netbeans.modules.editor.indent.project         1.44                                  Enabled  
  org.netbeans.spi.editor.hints                      1.64.0.8.55                           Enabled  
  org.netbeans.modules.java.lexer                    1.57                                  Enabled  
  org.netbeans.modules.html.editor.lib               3.54                                  Enabled  
  org.netbeans.modules.projectui                     1.81.0.8.9                            Enabled  
  org.netbeans.modules.javascript2.editor            0.97                                  Enabled  
  org.netbeans.spi.viewmodel                         1.73                                  Enabled  
  org.netbeans.modules.web.indent                    1.42                                  Installed
  org.netbeans.modules.progress.ui                   1.55                                  Enabled  
  org.netbeans.modules.junitlib                      1.27                                  Enabled  
  org.netbeans.modules.masterfs.ui                   2.25.0.2                              Enabled  
  org.netbeans.modules.maven.junit.ui                1.27                                  Enabled  
  org.netbeans.modules.lexer.antlr4                  1.4.0.1                               Enabled  
  org.netbeans.modules.java.editor.base              2.87.0.1                              Enabled  
  org.netbeans.core.multiview                        1.66                                  Enabled  
  org.netbeans.modules.languages.toml                1.4                                   Enabled  
  org.netbeans.modules.j2ee.eclipselinkmodelgen      1.54                                  Enabled  
  org.netbeans.modules.code.analysis                 1.48                                  Enabled  
  org.netbeans.modules.parsing.indexing              9.31.0.1.3.8                          Enabled  
  org.netbeans.spi.debugger.ui                       2.80                                  Enabled  
  net.java.html.boot.fx                              1.8.1                                 Installed
  org.netbeans.modules.java.project                  1.94                                  Enabled  
  org.netbeans.libs.lucene                           3.41                                  Enabled  
  org.netbeans.modules.keyring.impl                  1.46                                  Enabled  
  org.netbeans.modules.java.api.common               1.145                                 Enabled  
  org.openide.explorer                               6.84                                  Enabled  
  org.netbeans.modules.j2ee.persistence              1.77.0.1                              Installed
  org.netbeans.modules.whitelist                     1.45                                  Enabled  
  org.netbeans.modules.projectapi.nb                 1.26                                  Enabled  
  org.openide.filesystems.compat8                    9.31                                  Enabled  
  org.netbeans.modules.project.libraries             1.75                                  Enabled  
  org.netbeans.modules.java.project.ui               1.97                                  Enabled  
  libs.c.kohlschutter.junixsocket                    3.4                                   Installed
  org.netbeans.modules.maven.embedder                2.77                                  Enabled  
  org.netbeans.modules.html.lexer                    1.60                                  Enabled  
  org.netbeans.libs.batik.read                       1.17.0.1                              Enabled  
  org.netbeans.core.osgi                             1.44                                  Installed
  org.netbeans.modules.java.hints.declarative        1.42.0.1.17.13                        Enabled  
  org.netbeans.modules.netbinox                      1.63                                  Enabled  
  org.netbeans.modules.selenium2.server              1.25                                  Enabled  
  org.netbeans.modules.editor.structure              1.69.0.1                              Enabled  
  org.netbeans.modules.parsing.lucene                2.58.0.1                              Enabled  
  org.netbeans.modules.java.source.base              2.63.0.6.4.3.8.1                      Enabled  
  org.netbeans.libs.graaljs                          1.22                                  Enabled  
  org.netbeans.api.lsp                               1.19                                  Enabled  
  org.netbeans.core.ui                               1.67                                  Enabled  
  org.netbeans.modules.maven.model                   1.66                                  Enabled  
  org.apache.commons.lang3                           3.12.0                                Enabled  
  org.netbeans.modules.editor.bracesmatching         1.61.0.55                             Enabled  
  org.netbeans.core.startup.base                     1.84.0.1                              Enabled  
  org.netbeans.modules.textmate.lexer                1.22.0.1                              Enabled  
  org.netbeans.libs.json_simple                      0.34                                  Enabled  
  org.netbeans.modules.maven.indexer                 2.62                                  Enabled  
  org.netbeans.modules.html.indexing                 1.14                                  Installed
  org.netbeans.libs.junit4                           1.40                                  Enabled  
  org.netbeans.modules.project.dependency            1.5.0.1                               Enabled  
  org.netbeans.libs.junit5                           1.19                                  Installed
  org.netbeans.libs.javacapi                         8.46.0.3                              Enabled  
  org.netbeans.modules.defaults                      1.53                                  Enabled  
  org.netbeans.modules.web.browser.api               1.67                                  Installed
  org.apache.xml.resolver                            1.53.0.12                             Enabled  
  org.netbeans.modules.autoupdate.services           1.78                                  Enabled  
  org.netbeans.modules.editor.settings.lib           1.73.0.1                              Enabled  
  org.netbeans.modules.selenium2                     1.27                                  Enabled  
  org.netbeans.modules.debugger.jpda.truffle         1.19                                  Enabled  
  org.netbeans.modules.extexecution.process          1.49                                  Enabled  
  org.netbeans.modules.xml.catalog                   3.26.0.4                              Enabled  
  org.netbeans.modules.java.source.ant               1.53.0.1.6                            Enabled  
  org.netbeans.libs.snakeyaml_engine                 2.11                                  Enabled  
  org.netbeans.core.network                          1.34                                  Enabled  
  org.netbeans.spi.debugger.jpda.ui                  3.25                                  Enabled  
  org.netbeans.modules.lexer.nbbridge                1.54.0.1                              Enabled  
  org.netbeans.api.search                            1.43                                  Enabled  
  org.netbeans.modules.java.platform.ui              1.64                                  Enabled  
  org.netbeans.modules.masterfs.windows              1.38                                  Enabled  
  org.openide.filesystems.nb                         9.32                                  Enabled  
  org.netbeans.modules.keyring                       1.46                                  Enabled  
  org.netbeans.api.templates                         1.30                                  Enabled  
  org.netbeans.modules.csl.api                       2.80.0.2.1.1.8.1                      Enabled  
  org.netbeans.modules.javaee.injection              1.28                                  Enabled  
  org.netbeans.spi.palette                           1.68                                  Installed
  org.netbeans.swing.laf.flatlaf                     1.15                                  Enabled  
  org.netbeans.libs.truffleapi                       1.22                                  Enabled  
  org.netbeans.modules.autoupdate.cli                1.36                                  Enabled  
  org.netbeans.spi.navigator                         1.60                                  Enabled  
  org.netbeans.modules.uihandler                     2.57                                  Installed
  org.netbeans.modules.properties.syntax             1.72                                  Enabled  
  org.netbeans.modules.parsing.nb                    1.26.0.8.1                            Enabled  
  org.netbeans.modules.janitor                       1.15                                  Installed
  org.netbeans.modules.templatesui                   1.25                                  Installed
  org.netbeans.libs.git                              1.56                                  Installed
  org.netbeans.modules.javascript2.types             1.22                                  Enabled  
  org.netbeans.spi.java.hints                        1.56.0.13.4.3.32.6.8                  Enabled  
  org.netbeans.modules.debugger.jpda                 1.131.0.80                            Enabled  
  org.netbeans.modules.web.common.ui                 1.23                                  Installed
  org.netbeans.bootstrap                             2.101                                 Enabled  
  org.netbeans.modules.refactoring.java              1.84.0.1.3                            Enabled  
  org.netbeans.modules.java.source.queries           1.40                                  Installed
  org.netbeans.modules.properties                    1.77                                  Enabled  
  org.netbeans.modules.javascript2.json              1.25                                  Enabled  
  org.netbeans.modules.print                         7.48                                  Enabled  
  org.netbeans.modules.j2ee.metadata.model.support   1.53                                  Enabled  
  org.netbeans.modules.debugger.jpda.ui              1.76                                  Enabled  
  com.jcraft.jzlib                                   1.1.3                                 Installed
  org.netbeans.libs.freemarker                       2.56.0.239                            Enabled  
  org.openide.util                                   9.30                                  Enabled  
  org.netbeans.modules.spi.actions                   1.50                                  Installed
  org.netbeans.core.ide                              1.63                                  Enabled  
  org.netbeans.modules.editor.breadcrumbs            1.39                                  Enabled  
  org.netbeans.modules.editor.indent                 1.65                                  Enabled  
  org.netbeans.modules.java.preprocessorbridge       1.71.0.1                              Enabled  
  org.netbeans.modules.editor.actions                1.53.0.55                             Enabled  
  org.apache.commons.codec                           1.15.0                                Enabled  
  org.netbeans.api.debugger.jpda                     3.32                                  Enabled  
  org.netbeans.core.io.ui                            1.52                                  Enabled  
  org.netbeans.libs.tomlj                            1.4                                   Enabled  
  org.netbeans.html.xhr4j                            1.8.1                                 Enabled  
  org.openide.dialogs                                7.68                                  Enabled  
  org.netbeans.api.progress.compat8                  1.69                                  Installed
  org.netbeans.modules.xml.jaxb.api                  1.48                                  Installed
  org.netbeans.modules.junit                         2.96                                  Enabled  
  org.netbeans.modules.projectuiapi                  1.111.0.8                             Enabled  
  org.netbeans.libs.nashorn                          3.3                                   Enabled  
  org.netbeans.modules.gsf.testrunner.ui             1.37.0.1                              Enabled  
  org.netbeans.modules.gradle                        2.35                                  Enabled  
  org.openide.awt                                    7.90                                  Enabled  
  org.netbeans.modules.j2ee.metadata                 1.54                                  Enabled  
  org.netbeans.modules.gradle.editor                 1.4                                   Enabled  
  org.netbeans.modules.java.j2seplatform             1.65                                  Enabled  
  org.netbeans.modules.debugger.jpda.projects        1.62                                  Enabled  
  org.netbeans.modules.java.lsp.server               2.5.0.1.2.12.1.17.32.6.2.8.1.8.1.1.13 Enabled  
  org.netbeans.modules.editor.settings               1.79                                  Enabled  
  org.netbeans.api.io                                1.25                                  Enabled  
  org.netbeans.api.intent                            1.24                                  Enabled  
  org.netbeans.modules.java.testrunner.ui            1.26                                  Enabled  
  org.netbeans.modules.testng                        2.42                                  Enabled  
  org.netbeans.api.progress.nb                       1.70                                  Enabled  
  org.netbeans.modules.java.completion               2.7.0.2                               Enabled  
  com.google.gson                                    2.8.9                                 Enabled  
  org.netbeans.modules.xml.text                      1.81.0.1                              Enabled  
  org.netbeans.modules.options.editor                1.82                                  Enabled  
  net.java.html.sound                                1.8.1                                 Installed
  org.netbeans.api.progress                          1.70                                  Enabled  
  org.openide.util.ui                                9.31                                  Enabled  
  org.netbeans.modules.editor.fold                   1.67                                  Enabled  
  org.netbeans.modules.junit.ui                      1.29                                  Enabled  
  org.netbeans.modules.java.source.queriesimpl       1.39                                  Installed
  com.google.guava.failureaccess                     1.0.1                                 Installed
  org.netbeans.modules.maven.hints                   1.62                                  Enabled  
  org.netbeans.modules.editor.fold.nbui              1.34.0.55                             Enabled  
  org.openide.util.ui.svg                            1.16                                  Enabled  
  org.netbeans.libs.javafx                           2.29                                  Installed
  org.netbeans.modules.editor.completion             1.67.0.2                              Enabled  
  org.openide.text                                   6.90                                  Enabled  
  org.netbeans.modules.jumpto                        1.77.0.1                              Enabled  
  org.netbeans.modules.java.nativeimage.debugger     0.12                                  Enabled  
  org.netbeans.modules.xml.core                      1.65.0.4                              Enabled  
  org.netbeans.modules.xml.lexer                     1.52                                  Enabled  
  org.netbeans.libs.osgi                             1.44                                  Enabled  
  org.apache.tools.ant.module                        3.106.0.2                             Enabled  
  org.netbeans.modules.java.mx.project               1.11                                  Enabled  
  net.java.html.json                                 1.8.1                                 Enabled  
  org.netbeans.modules.diff                          1.73.0.42.1                           Enabled  
  org.netbeans.core.startup                          1.85.0.1                              Enabled  
  org.netbeans.api.java.classpath                    1.76                                  Enabled  
  org.netbeans.modules.lexer                         1.85.0.1                              Enabled  
  org.netbeans.libs.jcodings                         0.11                                  Enabled  
  org.netbeans.libs.commons_compress                 0.28.0.181                            Enabled  
  org.netbeans.core.execution                        1.64                                  Enabled  
  org.netbeans.modules.java.platform                 1.64                                  Enabled  
  org.netbeans.modules.updatecenters                 1.62                                  Enabled  
  org.netbeans.modules.swing.validation              1.54                                  Enabled  
  org.netbeans.modules.java.hints.legacy.spi         1.38.0.1.13                           Enabled  
  org.netbeans.swing.laf.dark                        2.17.0.2                              Installed
  org.netbeans.core                                  3.73                                  Enabled  
  org.netbeans.modules.sendopts                      2.58                                  Enabled  
  org.netbeans.modules.java.hints                    1.105.0.17.3.12.1.1.32.6.1.1.13       Enabled  
  net.java.html.boot                                 1.8.1                                 Enabled  
  net.java.html.boot.script                          1.8.1                                 Installed
  org.netbeans.modules.java.editor                   2.90.0.12.1.1.1                       Enabled  
  org.netbeans.modules.editor.util                   1.87                                  Enabled  
  org.netbeans.modules.gradle.dists                  1.10                                  Enabled  
  org.netbeans.modules.javascript.v8debug            1.32.0.1                              Installed
  org.netbeans.libs.antlr4.runtime                   1.23.0.1                              Enabled  
  com.google.guava                                   32.1.2                                Installed
  org.netbeans.libs.graalsdk                         1.22                                  Enabled  
  org.netbeans.modules.dbschema                      1.63.0.4.30                           Enabled  
  org.netbeans.api.maven                             1.28                                  Installed
  org.netbeans.modules.settings                      1.71                                  Enabled  
  org.netbeans.modules.editor.errorstripe.api        2.54.0.1                              Enabled  
  org.netbeans.modules.masterfs                      2.77.0.2                              Enabled  
  org.netbeans.lib.uihandler                         1.67                                  Installed
  slf4j.jdk14                                        1.7.36                                Enabled  
  org.netbeans.modules.markdown                      1.10                                  Enabled  
  net.java.html                                      1.8.1                                 Enabled  
  org.netbeans.modules.db                            1.91.0.30                             Enabled  
  org.netbeans.modules.editor.lib                    4.29.0.23.3.55                        Enabled  
  org.netbeans.modules.extexecution.process.jdk9     1.22                                  Enabled  
  org.netbeans.modules.editor.mimelookup.impl        1.54                                  Enabled  
  org.netbeans.modules.db.sql.editor                 1.59.0.30                             Installed
  org.openide.filesystems                            9.35                                  Enabled  
  org.netbeans.modules.editor.indent.support         1.64                                  Enabled  
  org.netbeans.modules.libs.gradle                   8.3                                   Enabled  
  org.netbeans.api.scripting                         1.19                                  Enabled  
  org.netbeans.libs.flexmark                         1.15                                  Enabled  
  org.netbeans.modules.extexecution.base             1.28                                  Enabled  
  org.netbeans.api.htmlui                            1.30                                  Enabled  
  org.netbeans.swing.tabcontrol                      1.79                                  Enabled  
  org.netbeans.modules.j2ee.core.utilities           1.56                                  Installed
  org.netbeans.modules.gsf.testrunner                2.34                                  Enabled  
  org.netbeans.libs.jna                              2.17                                  Enabled  
  org.netbeans.modules.j2ee.eclipselink              1.54                                  Installed
  org.netbeans.html.ko4j                             1.8.1                                 Enabled  
  org.netbeans.modules.editor.lib2                   2.42.0.55.3                           Enabled  
  org.netbeans.modules.gradle.java                   1.24.0.1                              Enabled  
  com.googlecode.javaewah.JavaEWAH                   1.1.6                                 Installed
  org.netbeans.modules.javahelp                      2.63                                  Enabled  
  org.netbeans.modules.css.lib                       2.2                                   Enabled  
  org.netbeans.modules.parsing.api                   9.29.0.8                              Enabled  
  org.netbeans.api.debugger                          1.77                                  Enabled  
  -------------------------------------------------- ------------------------------------- ---------
  Language Client: Starting
  WARNING: A terminally deprecated method in java.lang.System has been called
  WARNING: System::setSecurityManager has been called by org.netbeans.TopSecurityManager (file:/C:/Users/taish/.vscode/extensions/oracle.oracle-java-1.0.0/nbcode/platform/lib/boot.jar)
  WARNING: Please consider reporting this to the maintainers of org.netbeans.TopSecurityManager
  WARNING: System::setSecurityManager will be removed in a future release
  Language Client: Ready
  ```
  </details>

### Java言語
  - Java 21
    - [Unnamed Classes and Instance Main Methods](https://docs.oracle.com/en/java/javase/21/language/unnamed-classes-and-instance-main-methods.html#GUID-35544A22-61AB-4928-99BB-A9DD1CA062FF)
      - mainメソッドをシンプルに記述できるようになった。ただし、プレビュー機能であるため、コンパイルと実行には、--enable-previewオプションが必要
        ```shell
        javac --enable-preview -source 21 sample.java
        java --enable-preview sample
        ```
  - JSTLを利用する場合、ビルドバスにJARファイルの登録が必要
    - [Jakarta Standard Tag Library API](https://mvnrepository.com/artifact/jakarta.servlet.jsp.jstl/jakarta.servlet.jsp.jstl-api)
    - [Jakarta Standard Tag Library Implementation](https://mvnrepository.com/artifact/org.glassfish.web/jakarta.servlet.jsp.jstl)
    ![ビルドパスへの登録](/images/eclipse/jstl_taglib.png)
  - [JSTLを用いたjspで起こるエラーを解決したい](https://teratail.com/questions/350891)
    - [「http://java.sun.com/jsp/jstl/core」のタグライブラリ記述子が見つかりません　の解決方法](https://qiita.com/cuore623/items/d894ab8f986904786f12)
    - [JSTL 1.2.5](https://mvnrepository.com/artifact/org.glassfish.web/javax.servlet.jsp.jstl/1.2.5)
    - [JSTL coreタグライブラリの利用](https://qiita.com/sculptcat/items/53d1a3a2d3b973354085)
  - [Java 9以降でJAXBを使用するには、外部JARが必要](https://github.com/acroquest/javabook-support/issues/49)
  - [【Java】カレントディレクトリの取得方法](https://qiita.com/mushroominger/items/89e60847879b7e9a3ad0)
  - [String、Date、LocalDateの変換](https://qiita.com/hryshtk/items/43991beaabbb9d587360)
  - [Java List.add() UnsupportedOperationException](https://stackoverflow.com/questions/5755477/java-list-add-unsupportedoperationexception)<BR />
    ```java
    List<Employee> employeeList = Collections.emptyList();
    ```
    クラス名を指定せず、リストを初期化すると、リストへ追加する際にそのオブジェクトが妥当が判断できず、サポートしていないという例外が発生する。
    やっぱり、リストは、クラス名を指定して、初期化しなきゃいけないってこと。
    ```java
    List<Employee> employeeList = new ArrayList<Employee>();
    ```
  - Servlet
    - WebServeletアノテーションを指定する場合、web.xmlでのマッピングは不要。
      - [itmedia](https://atmarkit.itmedia.co.jp/ait/articles/1104/12/news134.html)の記事にある通り、JSR-315仕様に準じた対応となる模様。
        ```java
        @WebServlet("/SampleServlet")
        ```

        ```xml
        <servlet-mapping>
        <servlet-name>SampleServlet</servlet-name>
        <url-pattern>/SampleServlet</url-pattern>
        </servlet-mapping>
        ```
  - JUnit
    - [TODO: assertEqualsでなくassertThatを使うべきケースの理解](https://torazuka.hatenablog.com/entry/20111003/junit)
  - JavaDoc
    - [@paramタグ](https://www.javadrive.jp/javadoc/tag/index7.html)

### Spring Framework
  - [lombok 1.18.24](https://projectlombok.org/)
  - H2 DataBaseは、SQLを作成していることで操作する。データを直接操作することはない。
    アプリケーションを実行した後の結果は、コンソールで確認する。
    ```
    localhost:8080/h2-console
    ```

### graalVM
  IntelliJ IDEAのプロジェクトにて、SDKをGraalVM CE 22.1.0を選択して実行。他のJDKより若干早い模様。
  <details>
  <summary>
  ログ
  </summary>

  ```
  C:\graalvm-ce-java17-22.1.0\bin\java.exe "-javaagent:C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2022.1.2\lib\idea_rt.jar=63619:C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2022.1.2\bin" -Dfile.encoding=UTF-8 -classpath D:\Repository\Weekend_Programming\kotlin\spring\BatchCsvExport\build\classes\kotlin\main;D:\Repository\Weekend_Programming\kotlin\spring\BatchCsvExport\build\resources\main;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework.boot\spring-boot-starter-batch\2.7.0\a6d2ab8abfd4960727e97eb2dee20fb4897893a3\spring-boot-starter-batch-2.7.0.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework.boot\spring-boot-starter-data-jdbc\2.7.0\1d97bc667c9cc549180ce12e05e2002aa5f05e00\spring-boot-starter-data-jdbc-2.7.0.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework.boot\spring-boot-starter-data-jpa\2.7.0\773d8c4fbe92493655f4c7db3a2d95388b8f6eb8\spring-boot-starter-data-jpa-2.7.0.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.jetbrains.kotlin\kotlin-reflect\1.6.21\5dc3574d9b7bebfcb4ec6b10ada4aaa9e140bd0b\kotlin-reflect-1.6.21.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.jetbrains.kotlin\kotlin-stdlib-jdk8\1.6.21\eeb4d60d75e9ea9c11200d52974e522793b14fba\kotlin-stdlib-jdk8-1.6.21.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.mybatis.spring.boot\mybatis-spring-boot-starter\2.2.2\e4aff8ef9e02358f90b361acc938be3558f29285\mybatis-spring-boot-starter-2.2.2.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework.boot\spring-boot-starter-jdbc\2.7.0\dd69f21efd63a2a16d631210b5656dc30348451b\spring-boot-starter-jdbc-2.7.0.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework.boot\spring-boot-starter\2.7.0\64fd3c21486dd20df9a62566599337dae2eb62cc\spring-boot-starter-2.7.0.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework.batch\spring-batch-core\4.3.6\86b8b16e53ccd167ac27bf46bea1ebce4a3dd484\spring-batch-core-4.3.6.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework.data\spring-data-jdbc\2.4.0\3448abf95a24a8190c064fc0a7190f3fc2e56d69\spring-data-jdbc-2.4.0.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework.boot\spring-boot-starter-aop\2.7.0\49f204ec9672800932f8f7b344221251b1422da6\spring-boot-starter-aop-2.7.0.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\jakarta.transaction\jakarta.transaction-api\1.3.3\c4179d48720a1e87202115fbed6089bdc4195405\jakarta.transaction-api-1.3.3.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\jakarta.persistence\jakarta.persistence-api\2.2.3\8f6ea5daedc614f07a3654a455660145286f024e\jakarta.persistence-api-2.2.3.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.hibernate\hibernate-core\5.6.9.Final\8ec2c7b13de2fbcb19feddfb3a30932bb6a8228a\hibernate-core-5.6.9.Final.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework.data\spring-data-jpa\2.7.0\f82986cdf2beda49b0bbb28a880ca644a1eb6c42\spring-data-jpa-2.7.0.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework\spring-aspects\5.3.20\161a2ccb1d68aed17922981909081bd6d1e46628\spring-aspects-5.3.20.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.jetbrains.kotlin\kotlin-stdlib\1.6.21\11ef67f1900634fd951bad28c53ec957fabbe5b8\kotlin-stdlib-1.6.21.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.jetbrains.kotlin\kotlin-stdlib-jdk7\1.6.21\568c1b78a8e17a4f35b31f0a74e2916095ed74c2\kotlin-stdlib-jdk7-1.6.21.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.mybatis.spring.boot\mybatis-spring-boot-autoconfigure\2.2.2\44d8e5740eb89fcdd3d4f7ce60693b87a5cdbd32\mybatis-spring-boot-autoconfigure-2.2.2.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.mybatis\mybatis\3.5.9\991a4095dbb95d929dfe0a18a69692fd4c614e\mybatis-3.5.9.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.mybatis\mybatis-spring\2.0.7\f10e399232df99280df56d39662c00ea33756112\mybatis-spring-2.0.7.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework\spring-jdbc\5.3.20\140414df1080754fcefe12921543c599e51dfbb2\spring-jdbc-5.3.20.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\com.zaxxer\HikariCP\4.0.3\107cbdf0db6780a065f895ae9d8fbf3bb0e1c21f\HikariCP-4.0.3.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework.boot\spring-boot-autoconfigure\2.7.0\483f9a66d0e8326583c5054038d0aa0a95045dc3\spring-boot-autoconfigure-2.7.0.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework.boot\spring-boot\2.7.0\df8bd106d6c6a6494b787b71d23cef6d2dc73703\spring-boot-2.7.0.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework.boot\spring-boot-starter-logging\2.7.0\5ff2a55d345ad824f39d55eaa32203865a92b30f\spring-boot-starter-logging-2.7.0.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\jakarta.annotation\jakarta.annotation-api\1.3.5\59eb84ee0d616332ff44aba065f3888cf002cd2d\jakarta.annotation-api-1.3.5.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework\spring-core\5.3.20\4b88aa3c401ede3d6c8ac78ea0c646cf326ec24b\spring-core-5.3.20.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.yaml\snakeyaml\1.30\8fde7fe2586328ac3c68db92045e1c8759125000\snakeyaml-1.30.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework.batch\spring-batch-infrastructure\4.3.6\2705e1ecee0fda29e2a94918e55919f55138c02\spring-batch-infrastructure-4.3.6.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework\spring-context\5.3.20\517a42165221ea944c8b794154c10b69c0128281\spring-context-5.3.20.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework\spring-aop\5.3.20\c82f17997ab18ecafa8d08ce34a7c7aa4a04ef9e\spring-aop-5.3.20.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework\spring-tx\5.3.20\9a4ec2249dc3523ac70e0710a64288c14fc3ff78\spring-tx-5.3.20.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework\spring-beans\5.3.20\ab88bd9e3a8307f5c0516c15d295c88ec318659\spring-beans-5.3.20.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\com.fasterxml.jackson.core\jackson-databind\2.13.3\56deb9ea2c93a7a556b3afbedd616d342963464e\jackson-databind-2.13.3.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\io.micrometer\micrometer-core\1.9.0\9d5f8b84a530e1cbed373b83f55742986323c80d\micrometer-core-1.9.0.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\javax.batch\javax.batch-api\1.0\65392d027a6eb369fd9fcd1b75cae150e25ac03c\javax.batch-api-1.0.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.codehaus.jettison\jettison\1.2\765a6181653f4b05c18c7a9e8f5c1f8269bf9b2\jettison-1.2.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework.data\spring-data-relational\2.4.0\4b18626149807b28803392697d162de26c626b0e\spring-data-relational-2.4.0.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework.data\spring-data-commons\2.7.0\6dc643cf1512fdc5c2d63f55c83080b60b629d10\spring-data-commons-2.7.0.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.slf4j\slf4j-api\1.7.36\6c62681a2f655b49963a5983b8b0950a6120ae14\slf4j-api-1.7.36.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.aspectj\aspectjweaver\1.9.7\158f5c255cd3e4408e795b79f7c3fbae9b53b7ca\aspectjweaver-1.9.7.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.hibernate.common\hibernate-commons-annotations\5.1.2.Final\e59ffdbc6ad09eeb33507b39ffcf287679a498c8\hibernate-commons-annotations-5.1.2.Final.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.jboss.logging\jboss-logging\3.4.3.Final\c4bd7e12a745c0e7f6cf98c45cdcdf482fd827ea\jboss-logging-3.4.3.Final.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\net.bytebuddy\byte-buddy\1.12.10\f34127d93639fad8c6fb84b3ca30292697d6c55d\byte-buddy-1.12.10.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\antlr\antlr\2.7.7\83cd2cd674a217ade95a4bb83a8a14f351f48bd0\antlr-2.7.7.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.jboss\jandex\2.4.2.Final\1e1c385990b258ff1a24c801e84aebbacf70eb39\jandex-2.4.2.Final.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\com.fasterxml\classmate\1.5.1\3fe0bed568c62df5e89f4f174c101eab25345b6c\classmate-1.5.1.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.glassfish.jaxb\jaxb-runtime\2.3.6\1e6cd0e5d9f9919c8c8824fb4d310b09a978a60e\jaxb-runtime-2.3.6.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework\spring-orm\5.3.20\4eaf36c114a3aa2d1603834cfb197b5742ccde5b\spring-orm-5.3.20.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.jetbrains.kotlin\kotlin-stdlib-common\1.6.21\5e5b55c26dbc80372a920aef60eb774b714559b8\kotlin-stdlib-common-1.6.21.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.jetbrains\annotations\13.0\919f0dfe192fb4e063e7dacadee7f8bb9a2672a9\annotations-13.0.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\ch.qos.logback\logback-classic\1.2.11\4741689214e9d1e8408b206506cbe76d1c6a7d60\logback-classic-1.2.11.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.apache.logging.log4j\log4j-to-slf4j\2.17.2\17dd0fae2747d9a28c67bc9534108823d2376b46\log4j-to-slf4j-2.17.2.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.slf4j\jul-to-slf4j\1.7.36\ed46d81cef9c412a88caef405b58f93a678ff2ca\jul-to-slf4j-1.7.36.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework\spring-jcl\5.3.20\35119231d09863699567ce579c21512ddcbc5407\spring-jcl-5.3.20.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework.retry\spring-retry\1.3.3\13a6f4edb1f5a8956ec6aa867757e325bc98eee7\spring-retry-1.3.3.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework\spring-expression\5.3.20\20e179f0dfabf0a46428f22c2150c9c4850fd15d\spring-expression-5.3.20.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\com.fasterxml.jackson.core\jackson-annotations\2.13.3\7198b3aac15285a49e218e08441c5f70af00fc51\jackson-annotations-2.13.3.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\com.fasterxml.jackson.core\jackson-core\2.13.3\a27014716e4421684416e5fa83d896ddb87002da\jackson-core-2.13.3.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.hdrhistogram\HdrHistogram\2.1.12\6eb7552156e0d517ae80cc2247be1427c8d90452\HdrHistogram-2.1.12.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\jakarta.xml.bind\jakarta.xml.bind-api\2.3.3\48e3b9cfc10752fba3521d6511f4165bea951801\jakarta.xml.bind-api-2.3.3.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.glassfish.jaxb\txw2\2.3.6\45db7b69a8f1ec2c21eb7d4fc0ee729f53c1addc\txw2-2.3.6.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\com.sun.istack\istack-commons-runtime\3.0.12\cbbe1a62b0cc6c85972e99d52aaee350153dc530\istack-commons-runtime-3.0.12.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\ch.qos.logback\logback-core\1.2.11\a01230df5ca5c34540cdaa3ad5efb012f1f1f792\logback-core-1.2.11.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.apache.logging.log4j\log4j-api\2.17.2\f42d6afa111b4dec5d2aea0fe2197240749a4ea6\log4j-api-2.17.2.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.springframework.boot\spring-boot-devtools\2.7.0\2a45b04877bbfe9750e4d29f6a73f125e146513d\spring-boot-devtools-2.7.0.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.postgresql\postgresql\42.3.5\438e339890a7660c88c98dc0e43cd980604d3562\postgresql-42.3.5.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.checkerframework\checker-qual\3.5.0\2f50520c8abea66fbd8d26e481d3aef5c673b510\checker-qual-3.5.0.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\org.latencyutils\LatencyUtils\2.0.3\769c0b82cb2421c8256300e907298a9410a2a3d3\LatencyUtils-2.0.3.jar;C:\Users\taish\.gradle\caches\modules-2\files-2.1\com.sun.activation\jakarta.activation\1.2.2\74548703f9851017ce2f556066659438019e7eb5\jakarta.activation-1.2.2.jar com.example.demo.BatchCsvExportApplicationKt
  23:07:27.757 [Thread-0] DEBUG org.springframework.boot.devtools.restart.classloader.RestartClassLoader - Created RestartClassLoader org.springframework.boot.devtools.restart.classloader.RestartClassLoader@249f4db4

  .   ____          _            __ _ _
  /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
  ( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
  \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
  =========|_|==============|___/=/_/_/_/
  :: Spring Boot ::                (v2.7.0)

  2022-07-05 23:07:28.530  INFO 36608 --- [  restartedMain] c.e.demo.BatchCsvExportApplicationKt     : Starting BatchCsvExportApplicationKt using Java 17.0.3 on IdeaPad550-2022 with PID 36608 (D:\Repository\Weekend_Programming\kotlin\spring\BatchCsvExport\build\classes\kotlin\main started by taish in D:\Repository\Weekend_Programming\kotlin\spring\BatchCsvExport)
  2022-07-05 23:07:28.532 DEBUG 36608 --- [  restartedMain] c.e.demo.BatchCsvExportApplicationKt     : Running with Spring Boot v2.7.0, Spring v5.3.20
  2022-07-05 23:07:28.533  INFO 36608 --- [  restartedMain] c.e.demo.BatchCsvExportApplicationKt     : No active profile set, falling back to 1 default profile: "default"
  2022-07-05 23:07:28.639  INFO 36608 --- [  restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : Devtools property defaults active! Set 'spring.devtools.add-properties' to 'false' to disable
  2022-07-05 23:07:29.887  INFO 36608 --- [  restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Multiple Spring Data modules found, entering strict repository configuration mode!
  2022-07-05 23:07:29.895  INFO 36608 --- [  restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JDBC repositories in DEFAULT mode.
  2022-07-05 23:07:29.910  INFO 36608 --- [  restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 11 ms. Found 0 JDBC repository interfaces.
  2022-07-05 23:07:29.928  INFO 36608 --- [  restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Multiple Spring Data modules found, entering strict repository configuration mode!
  2022-07-05 23:07:29.929  INFO 36608 --- [  restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
  2022-07-05 23:07:29.937  INFO 36608 --- [  restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 3 ms. Found 0 JPA repository interfaces.
  2022-07-05 23:07:30.023  WARN 36608 --- [  restartedMain] o.m.s.mapper.ClassPathMapperScanner      : No MyBatis mapper was found in '[com.example.demo]' package. Please check your configuration.
  2022-07-05 23:07:30.303  INFO 36608 --- [  restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
  2022-07-05 23:07:30.600  INFO 36608 --- [  restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
  2022-07-05 23:07:30.755  INFO 36608 --- [  restartedMain] o.hibernate.jpa.internal.util.LogHelper  : HHH000204: Processing PersistenceUnitInfo [name: default]
  2022-07-05 23:07:30.826  INFO 36608 --- [  restartedMain] org.hibernate.Version                    : HHH000412: Hibernate ORM core version 5.6.9.Final
  2022-07-05 23:07:31.069  INFO 36608 --- [  restartedMain] o.hibernate.annotations.common.Version   : HCANN000001: Hibernate Commons Annotations {5.1.2.Final}
  2022-07-05 23:07:31.225  INFO 36608 --- [  restartedMain] org.hibernate.dialect.Dialect            : HHH000400: Using dialect: org.hibernate.dialect.PostgreSQL10Dialect
  2022-07-05 23:07:31.630  INFO 36608 --- [  restartedMain] o.h.e.t.j.p.i.JtaPlatformInitiator       : HHH000490: Using JtaPlatform implementation: [org.hibernate.engine.transaction.jta.platform.internal.NoJtaPlatform]
  2022-07-05 23:07:31.630  INFO 36608 --- [  restartedMain] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'
  2022-07-05 23:07:32.108  WARN 36608 --- [  restartedMain] o.s.b.a.batch.JpaBatchConfigurer         : JPA does not support custom isolation levels, so locks may not be taken when launching Jobs. To silence this warning, set 'spring.batch.jdbc.isolation-level-for-create' to 'default'.
  2022-07-05 23:07:32.113  INFO 36608 --- [  restartedMain] o.s.b.c.r.s.JobRepositoryFactoryBean     : No database type set, using meta data indicating: POSTGRES
  2022-07-05 23:07:32.221  INFO 36608 --- [  restartedMain] o.s.b.c.l.support.SimpleJobLauncher      : No TaskExecutor has been set, defaulting to synchronous executor.
  2022-07-05 23:07:32.436  INFO 36608 --- [  restartedMain] o.s.b.d.a.OptionalLiveReloadServer       : LiveReload server is running on port 35729
  2022-07-05 23:07:32.456  INFO 36608 --- [  restartedMain] c.e.demo.BatchCsvExportApplicationKt     : Started BatchCsvExportApplicationKt in 4.674 seconds (JVM running for 5.878)
  2022-07-05 23:07:32.458  INFO 36608 --- [  restartedMain] o.s.b.a.b.JobLauncherApplicationRunner   : Running default command line with: []
  2022-07-05 23:07:32.589  INFO 36608 --- [  restartedMain] o.s.b.c.l.support.SimpleJobLauncher      : Job: [SimpleJob: [name=ExportJpaPagingJob]] launched with the following parameters: [{run.id=5}]
  2022-07-05 23:07:32.626  INFO 36608 --- [  restartedMain] o.s.batch.core.job.SimpleStepHandler     : Executing step: [ExportJpaPagingStep]
  2022-07-05 23:07:32.665 DEBUG 36608 --- [  restartedMain] c.e.d.config.SampleProperty$Companion    : outputPath = D:/work\employee.csv
  2022-07-05 23:07:32.757 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@45fe467f
  2022-07-05 23:07:32.759 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@20c16cd0
  2022-07-05 23:07:32.760 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@922abf
  2022-07-05 23:07:32.760 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@191b0e83
  2022-07-05 23:07:32.760 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@16168e5e
  2022-07-05 23:07:32.762 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@5a30da8c
  2022-07-05 23:07:32.762 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@4b302854
  2022-07-05 23:07:32.762 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@601aa9d1
  2022-07-05 23:07:32.762 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@2fb4ea61
  2022-07-05 23:07:32.763 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@730ca1a1
  2022-07-05 23:07:32.794 DEBUG 36608 --- [  restartedMain] c.e.d.listener.WriteListener$Companion   : AfterWrite: count=10
  2022-07-05 23:07:32.802 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@307b530b
  2022-07-05 23:07:32.802 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@1df45622
  2022-07-05 23:07:32.802 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@d39f553
  2022-07-05 23:07:32.802 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@eab2196
  2022-07-05 23:07:32.802 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@6422c843
  2022-07-05 23:07:32.804 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@2193036d
  2022-07-05 23:07:32.805 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@71dd8b2b
  2022-07-05 23:07:32.805 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@771cd5d7
  2022-07-05 23:07:32.805 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@16e21af6
  2022-07-05 23:07:32.805 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@2f53fb2c
  2022-07-05 23:07:32.807 DEBUG 36608 --- [  restartedMain] c.e.d.listener.WriteListener$Companion   : AfterWrite: count=10
  2022-07-05 23:07:32.813 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@2e0896e
  2022-07-05 23:07:32.814 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@6678cf39
  2022-07-05 23:07:32.814 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@3f0a5ddc
  2022-07-05 23:07:32.814 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@201435c3
  2022-07-05 23:07:32.814 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@26b97356
  2022-07-05 23:07:32.817 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@42b4c39b
  2022-07-05 23:07:32.817 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@20075a00
  2022-07-05 23:07:32.817 DEBUG 36608 --- [  restartedMain] c.e.d.listener.ReadListener$Companion    : AfterRead: com.example.demo.domain.model.Employee@1f06ca2b
  2022-07-05 23:07:32.818 DEBUG 36608 --- [  restartedMain] c.e.d.listener.WriteListener$Companion   : AfterWrite: count=8
  2022-07-05 23:07:32.823  INFO 36608 --- [  restartedMain] o.s.batch.core.step.AbstractStep         : Step: [ExportJpaPagingStep] executed in 197ms
  2022-07-05 23:07:32.857  INFO 36608 --- [  restartedMain] o.s.b.c.l.support.SimpleJobLauncher      : Job: [SimpleJob: [name=ExportJpaPagingJob]] completed with the following parameters: [{run.id=5}] and the following status: [COMPLETED] in 244ms
  2022-07-05 23:07:32.869  INFO 36608 --- [ionShutdownHook] j.LocalContainerEntityManagerFactoryBean : Closing JPA EntityManagerFactory for persistence unit 'default'
  2022-07-05 23:07:32.874  INFO 36608 --- [ionShutdownHook] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown initiated...
  2022-07-05 23:07:32.881  INFO 36608 --- [ionShutdownHook] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown completed.

  プロセスは終了コード 0 で終了しました
  ```
  </details>

###  Pleiades
  - pleiades 2025-03
    ![Eclipse 4.35](/images/eclipse/20250321_2025-03_Eclipse4.35.png)
    - Tomcat 10.1.39
  - Pleiades 2024-03
    ![Eclipse 4.31](/images/eclipse/20240504_2024-03_Eclipse4.31.png)
  - Pleiades 2022-06およびTomcat 10.0.20での対応
    - サーブレット等の作成は、[新規]-[その他]から行う。
  - バージョン移行
    1.  新しいバージョンをダウンロードする
    1.  旧バージョンのフォルダを削除する
    1.  ダウンロードしたファイルを展開する
        * Windowsでは、ZIPファイルの名前ではなく、短い名前のフォルダ配下に展開する。
    1.  eclipseを起動する。
    1.  以前使用していたワークスペースを選択した場合、「古いバージョンで作成されました。続行して、古いバージョンと互換性がない可能性があるワークスペースを更新しますか？」と確認されるので、「続行」を選択して継続する。
    1.  「-clean開始中」と出ているので待つ。
    1.  ワークスペースが表示される。
  - Windows Defender除外チェック <BR />
    Windows Defenderのチェック対象から除外するよう設定する
    ![除外チェック](/images/eclipse/Windows_Defender_Exclusion_Check.png)
  - エンコード設定
    - 日本語を入出力する際、実行構成の設定を行う。
      ![実行構成](/images/eclipse/eclipse_encode.png)
      - 共通タブのエンコードにて、その他を選択し、ドロップダウンリストから"MS932"を選択する。
  - Tomcat 実行構成
    - ランタイム環境
      - インストール可能な最新バージョンをインストールして設定する
        ![ランタイム環境](/images/eclipse/20241026_Eclipse2024-09_Tomcat10.1.28.png)
    - サーバー
      - 設定したランタイム環境でサーバーを作成する
        ![サーバー設定](/images/eclipse/20241026_Eclipse2024-09_Tomcat10.1.28_ServerSetup.png)
    - 起動時のメッセージが日本語のため、エンコードを「システム・エンコーディングを使用」を選択する。
      ![実行構成](/images/eclipse/tomcat_configuration.png)

### Jenkins
  - Jenkinsのセットアップ（LTS 2.479.2）
    - アンロック
      ![Unlock Jenkins](/images/Java/20241207_Unlock_Jenkins.png)
    - プラグインのセットアップ
      ![Plugin Setup](/images/Java/20241207_Jenkins_Plugin_Setup.png)
    - admin/admin
  - Jenkinsのセットアップ（LTS 2.401.3）
    - 非推奨のサービス起動でセットアップ
      ![ダッシュボード](/images/jenkins/Jenkins_Dashboard.png)
    - admin/admin
  - ポート番号変更
    - インストール時に変更する場合
      ![Port Selection](/images/jenkins/Jenkins_Port.png)
    - jenkins.xmlで変更する場合
      ```
      <arguments>-Xrs 省略 --httpPort=8082 省略</arguments>
      ```
  - JUnitはじめ、プラグインの確認（Java本格入門 13章）
    - ビルド実行を確認するも、サンプルが良くないらしく、エラーになってしまう。環境としてはできているので、OKとする。
      ![ビルド実行](/images/jenkins/Jenkins_Build.png)

### Tomcat
  - [WindowsでインストールしたTomcatの起動ポートを変更する](https://mr-star.hatenablog.com/entry/tomcat/005)
    - ポート番号変更(${TOMCAT_HOME}/conf/server.xml)
      ```
      <Connector port="8081" protocol="HTTP/1.1"
            connectionTimeout="20000"
            redirectPort="8443" />
      ```
  - LifecycleExceptionで起動できない
    - Eclipseで起動する場合、関連する動的Webプロジェクトはすべてオープンしていないと発生するので、注意。

### H2 Database
  - 環境変数H2DRIVERSまたはCLASSPATHにH2*.jarを登録する。
  - データベースは、"H2 Console"で作成する。ただし、Embeddedモードでしか作成できない。

### Web App Sample
  - H2 Database コンソールを起動する
    ```
    C:\Program Files (x86)\H2\bin\h2.bat
    ```
  - データベース（~docoTsubu）に、mutter テーブルを作成
    ```sql
    CREATE TABLE MUTTER (
      ID INT PRIMARY KEY AUTO_INCREMENT,
      NAME VARCHAR(100) NOT NULL,
      TEXT VARCHAR(255) NOT NULL
    );
    ```
  - サンプルデータを追加する
    ```sql
    INSERT INTO MUTTER (NAME, TEXT) VALUES ('湊', '今日は休みだ');
    INSERT INTO MUTTER (NAME, TEXT) VALUES ('綾部', 'いいな～');
    ```
