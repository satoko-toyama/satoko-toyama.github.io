# 学術用ウェブサイトテンプレートの使い方ガイド

このガイドでは、学術用ウェブサイトテンプレートをフォークして、自分の情報に書き換え、GitHub Pagesで公開するまでの手順を説明します。すべての手順はGitHub上で完結する方法を紹介しています。

## 目次

- [学術用ウェブサイトテンプレートの使い方ガイド](#学術用ウェブサイトテンプレートの使い方ガイド)
  - [目次](#目次)
  - [1. GitHubでリポジトリをフォークする](#1-githubでリポジトリをフォークする)
  - [2. リポジトリ設定の変更](#2-リポジトリ設定の変更)
    - [1. GitHub Actions の書き込み権限を付与する](#1-github-actions-の書き込み権限を付与する)
  - [3. プロフィール情報の編集](#3-プロフィール情報の編集)
    - [英語の設定ファイル編集](#英語の設定ファイル編集)
    - [日本語の設定ファイル編集](#日本語の設定ファイル編集)
  - [4. トップページと多言語対応の設定](#4-トップページと多言語対応の設定)
    - [英語版の自己紹介文](#英語版の自己紹介文)
    - [日本語版の自己紹介文](#日本語版の自己紹介文)
  - [5. 業績情報の更新](#5-業績情報の更新)
    - [リサーチマップからデータを取得する場合](#リサーチマップからデータを取得する場合)
    - [CSVファイルのアップロード](#csvファイルのアップロード)
    - [既存のCSVファイルを直接編集する場合](#既存のcsvファイルを直接編集する場合)
  - [6. 経歴の編集](#6-経歴の編集)
    - [経歴情報の編集](#経歴情報の編集)
    - [プロジェクト情報の編集（基本的に編集不要）](#プロジェクト情報の編集基本的に編集不要)
  - [7. プロフィール画像の変更とファビコンの変更](#7-プロフィール画像の変更とファビコンの変更)
    - [画像の変更](#画像の変更)
  - [8. SEO対策のカスタマイズ](#8-seo対策のカスタマイズ)
    - [sitemap.xmlとrobots.txtの生成](#sitemapxmlとrobotstxtの生成)
    - [index.htmlの編集](#indexhtmlの編集)
  - [9. GitHub Pagesでの公開](#9-github-pagesでの公開)
    - [デプロイワークフローを再実行](#デプロイワークフローを再実行)
  - [10. トラブルシューティング](#10-トラブルシューティング)
    - [APIデータ生成に関する問題](#apiデータ生成に関する問題)
    - [多言語切り替えの問題](#多言語切り替えの問題)
    - [ビルドエラー](#ビルドエラー)
    - [その他の問題](#その他の問題)
  - [カスタマイズの拡張](#カスタマイズの拡張)

## 1. GitHubでリポジトリをフォークする

まず、テンプレートリポジトリをあなたのGitHubアカウントにフォークします。

1. テンプレートリポジトリのページ（ https://github.com/sigma-users/personal-website-template ）にアクセスします
2. 右上の「Fork」ボタンをクリックします
3. 必要に応じてリポジトリ名を変更します（例：`yourusername.github.io`）
4. 「Create Fork」ボタンをクリックしてフォークを完了します

> **ヒント**: ユーザーサイトとして公開する場合は、リポジトリ名を `あなたのGitHubユーザー名.github.io` にすると良いでしょう。

## 2. リポジトリ設定の変更

フォークしたリポジトリの基本設定を変更します。

1. フォークしたリポジトリのページで「Settings」タブをクリックします
2. 左のタブの「COde and automation」→「GitHub Pages」セクションを見つけます
3. Sourceセクションで「GitHub Actions」を選択します（デプロイワークフローを使用するため）

> **注意**: もしデプロイワークフローがない場合は、後の手順でセットアップします。

### 1. GitHub Actions の書き込み権限を付与する
まず、デプロイワークフローが gh-pages ブランチに書き込みできるよう権限を設定します：

1. フォークしたリポジトリのページで「Settings」タブをクリックします
2. 左側のメニューから「Actions」→「General」をクリックします
3. 「Workflow permissions」セクションまでスクロールします
4. 「Read and write permissions」オプションを選択します
5. 「Save」ボタンをクリックして変更を保存します

## 3. プロフィール情報の編集

多言語対応の設定ファイルを編集して、プロフィール情報を更新します。

### 英語の設定ファイル編集

1. フォークしたリポジトリで、`Code`タブから`public/locales/en/translations.json`ファイルを開きます
2. 右上の「Edit this file」（ペンのアイコン）をクリックします
3. 以下のセクションを自分の情報に書き換えます：
   - `header.name`: ヘッダーに表示される名前
   - `bio.name`: 英語の名前
   - `bio.nameJp`: 日本語の名前
   - `bio.phd`: phdがある場合の英語phd名（ない場合`""`を設定）
   - `bio.phdJp`: phdがある場合の日本語phd名（ない場合`""`を設定）
   - `bio.position`: 役職（例：「Associate Professor」）
   - `bio.affiliation`: 所属（例：「Department of Engineering, University of Tokyo」）
   - `bio.github`, `bio.scholar`, `bio.orcid`, `bio.researchmap`: 各種プロフィールページへのリンク（ない場合は`""`を設定）
   - `bio.researchTags`: 研究キーワードの配列
   - `contact.emailAdress`: メールアドレス（`hoge[at]sigma.t.u-tokyo.ac.jp`とする）
   - `contact.phoneNumber`: 電話番号
   - `contact.addressLine1`, `contact.addressLine2`, `contact.addressLine3`: 住所の各行
   - `contact.linkedin`, `contact.facebook`, `contact.twitter`: 各種ソーシャルメディアのリンク（ない場合`""`を設定）
4. 「Commit changes...」ボタン（緑）をクリックして変更を保存します
5. コミットメッセージを入力（例：「Update English profile information」）して「Commit changes」をクリックします
   （`main` branchへのCommitを選択してください）  

> **ヒント**: 不要な項目は`""`のように空文字を設定するか`null`を記入してください。
> **ヒント**: ページ下部のソーシャルメディアを削除したい場合は`contact.socialMedia`を`""`にすると消えます。

### 日本語の設定ファイル編集

1. 同様に、`public/locales/ja/translations.json`ファイルを開きます
2. 「Edit this file」をクリックします
3. 英語版と同様のセクションを日本語情報に書き換えます
4. 「Commit changes...」ボタンをクリックして変更を保存します

## 4. トップページと多言語対応の設定

自己紹介文（Bio）のマークダウンファイルを編集します。

### 英語版の自己紹介文

1. `public/content/bio/bio_en.md`ファイルを開きます
2. 「Edit this file」をクリックします
3. マークダウン形式で自己紹介文を書き換えます：
   - 見出し（`##`）を使って構造化すると良いでしょう
   - 研究内容、経歴のハイライト、専門分野などを記述します
   - 箇条書き（`-`）も活用できます
4. 「Commit changes...」ボタンをクリックして変更を保存します

> **ヒント**: デフォルトではGithubやORCIDなどはIcon表記されます。テキストで表記したい場合は`bio.github`、`bio.orcid`などを`""`にして、こちらのマークダウンファイル`- Github: [https://github.com](https://github.com)`に記載してください。本テンプレートに例があるので参考にしてください。

### 日本語版の自己紹介文

1. `public/content/bio/bio_ja.md`ファイルを開きます
2. 「Edit this file」をクリックします
3. 英語版と同様の内容を日本語で書き換えます
4. 「Commit changes...」ボタンをクリックして変更を保存します

## 5. 業績情報の更新

研究業績（論文と発表とその他）及び受賞や研究費の情報をCSVファイルで更新します。

### リサーチマップからデータを取得する場合

1. リサーチマップ（https://researchmap.jp/ ）にログインします
2. マイポータルの「業績」タブをクリックします
3. 「論文」または「発表」セクションで「エクスポート」をクリックしてCSVファイルをダウンロードします

### CSVファイルのアップロード

1. フォークしたリポジトリの`data`ディレクトリを開きます
2. 「Add file」→「Upload files」をクリックします
3. ダウンロードした論文のCSVファイルを`rm_published_papers.csv`という名前でアップロードします
4. ダウンロードした発表のCSVファイルを`rm_presentations.csv`という名前でアップロードします
5. ダウンロードしたその他（Proceedingsや解説記事など）のCSVファイルを`rm_misc.csv`という名前でアップロードします
6. ダウンロードした受賞のCSVファイルを`rm_awards.csv`という名前でアップロードします
7. ダウンロードしたプロジェクトのCSVファイルを`rm_research_projects.csv`という名前でアップロードします
8. 「Commit changes...」ボタンをクリックして変更をコミットします

> **注意**: CSVファイルのフォーマットや列名がテンプレートの想定と異なる場合は、`scripts/generatePublicApi.cjs`ファイルを編集してマッピングを調整する必要があります。

### 既存のCSVファイルを直接編集する場合

1. `data/rm_published_papers.csv`ファイルを開きます
2. 「Edit this file」をクリックします
3. CSVフォーマットに従って論文情報を編集します：
   ```
   published_papers
   ID,タイトル(英語),タイトル(日本語),著者(英語),著者(日本語),誌名(英語),誌名(日本語),出版年月,DOI,主要な業績かどうか
   paper-1,Your Paper Title,あなたの論文タイトル,"Author 1, Author 2","著者1, 著者2",Journal Name,ジャーナル名,2023-01,10.1234/abcd,true
   ```
4. 変更を保存します
5. 同様に`data/rm_presentations.csv`も更新します
   ```
   presentations
   ID,タイトル(英語),タイトル(日本語),講演者(英語),講演者(日本語),会議名(英語),会議名(日本語),発表年月日,開催地(英語),開催地(日本語),招待の有無
   presentation-1,Your Presentation Title,あなたの発表タイトル,"Author 1, Author 2","著者1, 著者2",Conference Name,会議名,2023-01-01,Location,場所,false
   ```
6. 同様に`data/rm_misc.csv`も更新します
   ```
   misc
   ID,タイトル(英語),タイトル(日本語),著者(英語),著者(日本語),誌名(英語),誌名(日本語),出版年月,DOI,主要な業績かどうか
   paper-1,Your Paper Title,あなたの論文タイトル,"Author 1, Author 2","著者1, 著者2",Journal Name,ジャーナル名,2023-01,10.1234/abcd,false
   ```
7. 同様に`data/rm_awards.csv`も更新します
   ```
   awards
   ID,賞名(日本語),賞名(英語),タイトル(日本語),タイトル(英語),授与機関(日本語),授与機関(英語),受賞年月,主要な業績かどうか
   example-id,賞名,"Example Award Name",タイトル,"Example Title",授与機関,"Example Awarder",2025-03,false
   ```
8. 同様に`data/rm_research_projects.csv`も更新します
   ```
   research_projects
   ID,タイトル(日本語),タイトル(英語),提供機関(日本語),提供機関(英語),制度名(日本語),制度名(英語),研究種目(日本語),研究種目(英語),研究期間(From),研究期間(To),課題番号,主要な業績かどうか
   example-id,これは説明用のレコードです,"This is an example record for explanation purposes",提供機関(例),"Funder (Example)",制度名(例),"Program Name (Example)",研究種目(例),"Research Category (Example)",2023-12,2024-12,例-課題番号,false
   ```

> **注意**: 最初の行は読み飛ばされるため、2行目にヘッダを入力し、3行目以降にレコードを入力してください。
> **注意**: ヘッダは編集せず、3行目以降のみ編集してください。
> **注意**: CSVは基本的にカンマで要素を区切ります。複数著者などを利用する場合は`"Author1, Author2"`や`"[Author1, Author2]"`などのように`""`でくくってください。
> **注意**: 不要な項目は空欄か`null`を入力すると表示されなくなります。
> **注意**: ヘッダのカラム名は日本語で記載されています。以下は各カラム名の日本語での説明です：
> - `ID`: 各レコードの一意の識別子。
> - `タイトル(日本語)`: 日本語でのタイトル。
> - `タイトル(英語)`: 英語でのタイトル。
> - `著者(日本語)`: 日本語での著者名。 ("著者1, 著者2")。
> - `著者(英語)`: 英語での著者名。("Author 1, Author 2")。
> - `誌名(日本語)`: 日本語での誌名。
> - `誌名(英語)`: 英語での誌名。
> - `出版年月`: 出版年月 (YYYY-MM形式)。
> - `DOI`: デジタルオブジェクト識別子 (Digital Object Identifier)。
> - `主要な業績かどうか`: 主要な業績かどうか (true/false)。
> - `講演者(日本語)`: 日本語での講演者名。 ("著者1, 著者2")。
> - `講演者(英語)`: 英語での講演者名。("Author 1, Author 2")。
> - `会議名(日本語)`: 日本語での会議名。（国際会議）
> - `会議名(英語)`: 英語での会議名。（国際会議）
> - `発表年月日`: 発表の日付 (YYYY-MM-DD形式)。
> - `開催地(日本語)`: 日本語での開催地。
> - `開催地(英語)`: 英語での開催地。
> - `招待の有無`: 招待されたかどうか (true/false)。
> - `賞名(日本語)`: 日本語での賞名。
> - `賞名(英語)`: 英語での賞名。
> - `授与機関(日本語)`: 日本語での授与機関名。
> - `授与機関(英語)`: 英語での授与機関名。
> - `受賞年月`: 受賞年月 (YYYY-MM形式)。
> - `制度名(日本語)`: 日本語での制度名。
> - `制度名(英語)`: 英語での制度名。
> - `研究種目(日本語)`: 日本語での研究種目。
> - `研究種目(英語)`: 英語での研究種目。
> - `研究期間(From)`: 研究開始日 (YYYY-MM-DD形式)。
> - `研究期間(To)`: 研究終了日 (YYYY-MM-DD形式)。
> - `課題番号`: 研究課題の番号。

## 6. 経歴の編集

経歴のJSONファイルを編集します。

### 経歴情報の編集

1. `public/content/career/career_en.json`ファイルを開きます
2. 「Edit this file」をクリックします
3. JSONファイルのフォーマットに従って、自分の学歴・職歴情報を入力します：
   ```json
   [
     {
       "id": "career-1",
       "position": "Your Position",
       "organization": "Your Organization",
       "location": "Location",
       "startDate": "2020",
       "endDate": null,  // 現在の職の場合はnull
       "description": "Description of your role",
       "type": "work"    // "work"または"education"
     },
     // 他の経歴項目...
   ]
   ```
4. 「Commit changes...」をクリックして保存します
5. 同様に`public/content/career/career_ja.json`も日本語情報で更新します

> **注意**: `"id"`は日本語と英語で統一してください。経歴の順番は問いません。

### プロジェクト情報の編集（基本的に編集不要）

1. `public/content/etc/projects_en.json`ファイルを開きます
2. 自分のプロジェクト情報を入力します：
   ```json
   [
     {
       "id": "project-1",
       "title": "Project Name",
       "description": "Description of the project",
       "url": "https://project-url.com",
       "languages": ["Language1", "Language2"],
       "languageColors": ["#color1", "#color2"]
     },
     // 他のプロジェクト項目...
   ]
   ```
3. 変更を保存します
4. 同様に`public/content/etc/projects_ja.json`も日本語情報で更新します

> **注意**: `"id"`は日本語と英語で統一してください。プロジェクトの順番は問いません。

> **ヒント**: 該当する事項がない場合は空のjsonを入力してファイルは残してください．
```json
   [
     // 何も記述しない
   ]
```

## 7. プロフィール画像の変更とファビコンの変更

### 画像の変更

プロフィール画像を変更します。

1. フォークしたリポジトリの`public/images`ディレクトリを開きます
2. 「Add file」→「Upload files」をクリックします
3. 新しいプロフィール画像を`profile.png`という名前でアップロードします
   - または既存の`profile.png`を置き換えます
4. 「Commit changes...」ボタンをクリックして変更をコミットします

> **ヒント**: 画像のサイズやアスペクト比に注意してください。プロフィール画像は正方形（1:1）、ロゴは横長の形式が推奨されます。

## 8. SEO対策のカスタマイズ

### sitemap.xmlとrobots.txtの生成

上記のURLを自分のGitHub PagesのURLに変更します。
1. フォークしたリポジトリの`scripts/generateSeoFiles.cjs`ファイルを開きます
2. 以下の部分をあなたのGitHubユーザー名や氏名に置き換えます：
   ```javascript
   // 設定 - サイトのURLを実際のものに変更してください
   const SITE_URL = 'https://username.github.io';
   ```
3. 変更を保存し、コミットします

> **ヒント**: `https://username.github.io/sitemap.xml`と`https://username.github.io/robots.txt`が生成されます。

### index.htmlの編集

index.htmlファイル内のSEOやGoogle Search Consoleの情報をカスタマイズします。

1. フォークしたリポジトリのホームにある`index.html`ファイルを開きます
2. 以下の情報をあなたのGitHubユーザー名や氏名に置き換えます：
   - `<title>`タグ内の内容をあなたの名前に変更します
   - `<meta name="description">`の`content`属性をあなたの研究内容に合わせて編集します
   - `<meta name="author">`の`content`属性をあなたの名前に変更します
   - `<link rel="canonical">`の`href`属性をあなたのGitHub PagesのURLに変更します
   - `<script type="application/ld+json">`内の`"url"`と`"target"`をあなたのGitHub PagesのURLに変更します
3. 変更を保存し、コミットします

> **ヒント**: SEO設定を適切に行うことで、検索エンジンでの表示が向上します。


## 9. GitHub Pagesでの公開

サイトをGitHub Pagesで公開します。

1. フォークしたリポジトリの「Actions」タブをクリックします
2. 「Deploy to GitHub Pages」ワークフローを見つけて選択します
   - すでにワークフローが実行中または完了している場合は、その結果を確認します
   - ワークフローが見つからない場合は、以下の手順でワークフローファイルを作成します：
     a. 「.github/workflows」ディレクトリを開きます
     b. 「deploy.yml」ファイルがあるか確認します
     c. なければ新規作成して、テンプレートリポジトリの同ファイルの内容をコピーします
3. ワークフローが成功したら、「Settings」→「Pages」で公開されたURLを確認します

> **ヒント**: 初回のデプロイには数分かかることがあります。辛抱強く待ちましょう。

### デプロイワークフローを再実行
必要に応じて、以下の手順でワークフローを再実行します：

1. リポジトリのページで「Actions」タブをクリックします
2. 左側の「Workflows」から「Deploy to GitHub Pages」を選択します
3. 右上の「Run workflow」ボタンをクリックします
4. 「Run workflow」ボタンを再度クリックして実行を開始します



## 10. トラブルシューティング

問題が発生した場合の対処法をいくつか紹介します。

### APIデータ生成に関する問題

- **症状**: 論文や発表データが表示されない
- **解決策**: GitHub Actions内でAPIデータ生成スクリプトが正しく実行されているか確認します
  1. リポジトリの「Actions」タブで最新のワークフロー実行を確認します
  2. エラーがあれば、CSVファイルのフォーマットを確認します
  3. 必要に応じて`scripts/generatePublicApi.cjs`を編集してCSVの列名マッピングを調整します

### 多言語切り替えの問題

- **症状**: 言語を切り替えても内容が変わらない、または表示されない
- **解決策**: 言語ファイルが正しくロードされているか確認します
  1. ブラウザの開発者ツールでネットワークタブを開きます
  2. 該当する言語ファイル（`translations.json`）のロードが成功しているか確認します
  3. 必要に応じて`src/i18n.ts`の設定を確認します

### ビルドエラー

- **症状**: GitHub Actionsビルドが失敗する
- **解決策**:
  1. ワークフローログを確認して具体的なエラーを特定します
  2. 一般的な原因：
     - JSONファイルの構文エラー（余分なカンマや閉じ括弧の欠落など）
     - 必要なファイルの欠落
     - パスの問題

### その他の問題

もし上記で解決しない問題がある場合：
1. GitHubのIssuesでテンプレートリポジトリの既存の問題を検索します
2. 解決策が見つからない場合は、新しいIssueを作成して質問します

## カスタマイズの拡張

基本的な設定が完了したら、さらに以下の部分をカスタマイズすることも可能です：

1. `tailwind.config.js`でカラースキームを変更
2. `src/components`内の各コンポーネントファイルを編集してレイアウトや機能を調整
3. `public/index.html`でメタタグを更新

---

このガイドが役立ち、素敵な学術用ウェブサイトが作成できることを願っています！改善点や質問があれば、ぜひIssueやプルリクエストで共有してください。

Happy coding! 🚀
