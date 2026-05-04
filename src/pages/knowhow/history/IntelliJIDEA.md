---
layout: ../../../layouts/KnowhowLayout.astro
title: Update History of IntelliJ IDEA
nav: programming
---

- IntelliJ IDEA 2025.3.2
- 省略時動作が厳格化されたことを受け、明示的にインメモリを使用することを指定するように修正
    ```yaml
    spring:
    datasource:
        url: jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=FALSE
        driver-class-name: org.h2.Driver
        username: sa
        password:
    h2:
        console:
        enabled: true
    batch:
        ...
        jdbc:
        initialize-schema: always
    ```
- IntelliJ IDEA 2025.3.1
- Update Kotlin 2.3.0 for Java 25
    ```
    plugins {
    ...
    kotlin("jvm") version "2.3.0"
    kotlin("plugin.spring") version "2.3.0"
    }
    ...
    java.sourceCompatibility = JavaVersion.VERSION_25
    ...
    tasks.named("compileKotlin", org.jetbrains.kotlin.gradle.tasks.KotlinCompilationTask::class.java) {
    compilerOptions {
        ...
        apiVersion.set(org.jetbrains.kotlin.gradle.dsl.KotlinVersion.KOTLIN_2_3)
    }
    }
    ```
- IntelliJ IDEA 2024.3.4.1
- Update PostgreSQL JDBC Driver
    ```kts
    dependencies {
    ...
    runtimeOnly("org.postgresql:postgresql:42.7.5")
    ...
    }
    ```
- IntelliJ IDEA 2024.3.2.2
- Mockito as agent over jdk 21
    - [Support configuring Mockito java agent in java 21+](https://github.com/spring-io/initializr/issues/1590)
    ```kts
    var mockitoAgent = configurations.create("mockitoAgent")

    dependencies {
        ...
        testImplementation("org.mockito.kotlin:mockito-kotlin:5.4.0")
        mockitoAgent("org.mockito:mockito-core") { isTransitive = false }
    }

    tasks {
        test {
        jvmArgs("-javaagent:${mockitoAgent.asPath}")
        }
    }
    ```
- IntelliJ IDEA 2024.3
- Kotlin 2.1.0
    ```kts
    plugins {
    ...
    kotlin("jvm") version "2.1.0"
    ...
    }
    ```
- IntelliJ IDEA 2024.2.3
- Kotlin 2.0.20
    - kotlinOptions Deprecated - https://kotlinlang.org/docs/gradle-compiler-options.html#target-the-jvm
    ```kts
    tasks.named("compileKotlin", org.jetbrains.kotlin.gradle.tasks.KotlinCompilationTask::class.java) {
        compilerOptions {
        freeCompilerArgs.add("-Xjsr305=strict")
        apiVersion.set(org.jetbrains.kotlin.gradle.dsl.KotlinVersion.KOTLIN_2_0)
        }
    }
    ```
- IntelliJ IDEA 2024.2.0.2
- PostgreSQL 16.4
- Gradle 8.8
- Kotlin 2.0.0
- Compose Multiplatform
    ![Compose for Desktop](/images/Kotlin/20240529_Kotlin_Compose_Desktop.png)
- Intellij IDEA 2024.1.1
- Kotlin 1.9.24
- Intellij IDEA 2023.3.6
- Kotlin 1.9.23
    ```
    plugins {
    ...
    kotlin("jvm") version "1.9.23"
    ...
    }
    ```
- Intellij IDEA 2023.3.4
- Kotlin 1.9.22
    ![Kotlinコンパイラ](/images/Kotlin/20240223_IntelliJ_IDEA_2023.3.4_KotlinSetting.png)
    ![デバッグ](/images/Kotlin/20240223_IntelliJ_IDEA_2023.3.4_KotlinDebug.png)
    - kotlinc.xml
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <project version="4">
        <component name="Kotlin2JvmCompilerArguments">
        <option name="jvmTarget" value="21" />
        </component>
        <component name="KotlinJpsPluginSettings">
        <option name="version" value="1.9.22-release-704" />
        </component>
    </project>
    ```
- IntelliJ IDEA 2023.3
    ![Intellij IDEA 2023.3](/images/Kotlin/20231208_IntelliJ_IDEA_2023.3.png)
- IntelliJ IDEA 2023.2
    ![Intellij IDEA 2023.2](/images/Kotlin/20230730_IntelliJ_IDEA_2023.2.png)
- IntelliJ IDEA 2023.1
    ![新しいUIの有効化](/images/Kotlin/IntelliJ_IDEA_2023.1_NewUI_Enable.png)
    ![新しいUIの紹介](/images/Kotlin/IntelliJ_IDEA_2023.1_About_NewUI.png)
    ![新しいUI](/images/Kotlin/IntelliJ_IDEA_2023.1_NewUI.png)
