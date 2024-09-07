#	詳細検討

- [Astroでアプリを作成する](https://github.com/Tatsukiyoshi/astro-react-grid-chart)
	-	GitHubに新しいリポジトリを作成し、クローンする
	-	クローンしたディレクトリの上位にて、プロジェクトを作成
		```
		bunx create-astro@latest astro-react-grid-chart
		```
		-	作成する際、ディレクトリが空である必要があるため、空にすること
	-	以前作成した[表のサンプルコード](https://github.com/Tatsukiyoshi/reactgrid-sample)を取り込む（→0.2）
	-	以前作成した[グラフのサンプルコード](https://github.com/Tatsukiyoshi/reactchart-sample)を取り込む（→0.3）
	-	天気データをPostgresSQLに取り込み、連携するコードをPrismaで作成する（→0.5）
	-	天気データを表およびグラフで表示する（→0.8）
- [Next.jsでアプリを作成する](https://github.com/Tatsukiyoshi/next-grid-chart)
	-	GitHubに新しいリポジトリを作成し、クローンする
	-	クローンしたディレクトリの上位にて、プロジェクトを作成
		```
		bun create next-app
		```
		-	作成する際、ディレクトリが空である必要があるため、空にすること
	-	Astroで実践したReactコンポーネントを流用する（→0.8）
