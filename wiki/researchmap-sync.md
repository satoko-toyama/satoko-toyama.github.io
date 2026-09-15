# researchmap 自動同期

## 自動実行

GitHub Actions の **Deploy to GitHub Pages** が毎月1日 **09:17（日本時間）** に
公開 researchmap API を取得し、テスト・ビルド後に GitHub Pages を更新します。
GitHub の混雑で開始が遅れることがあります。PC や Codex の起動は不要です。
`main` への push 時にも同期します。

今すぐ更新する場合は [Actions](https://github.com/satoko-toyama/satoko-toyama.github.io/actions/workflows/deploy.yml)
で **Run workflow** を実行してください。API キーの登録は不要です。

取得元: <https://api.researchmap.jp/satoko_toyama?format=json>
公開プロフィール: <https://researchmap.jp/satoko_toyama>

## 更新する情報

- 氏名、所属、役職、学位、研究キーワード（日本語・英語）
- 論文、学会発表、MISC、受賞、研究課題・研究費
- 経歴、学歴（`9999` の終了年は「現在」として表示）

researchmap の公開情報を正とします。削除・非公開化した業績は、次回の正常同期で
サイトからも削除されます。片方の言語しかない項目は、もう片方の言語で補います。
学歴は researchmap の学部・研究科・専攻を表示し、記載のない学位・所在地は推測しません。

自己紹介文（`public/content/bio/`）、写真、連絡先、Scholar 等のリンクは手動編集を維持します。
researchmap のメディア報道など、既存サイトに表示欄のない分類は同期対象外です。

## 保存と失敗時の動作

- `data/researchmap.json` に表示に必要な項目だけを保存します。
- `lastCheckedAt` に正常取得した時刻（UTC）を記録し、同期履歴をコミットします。
- `public/api/`、`public/content/career/`、`public/locales/` の同期対象項目は自動生成です。
- API のタイムアウト・異常な応答・途中で欠けたページ・テストやビルドの失敗時は公開しません。
  GitHub Actions が失敗となり、公開サイトは最後に成功した内容を維持します。
- 複数ページの件数や ID の重複を確認します。途中で件数が変わった場合も再公開せず失敗します。
- GitHub Actions の通知設定に従って失敗を確認できます。独自の通知先・通知設定は変更していません。
- Actions が無効化された場合は Actions 画面で再有効化してください。

自動コミットは GitHub 標準の `GITHUB_TOKEN` を使います。このコミットは新しい push ワークフローを
起動しないため、同じジョブ内で公開まで行います。更新競合で push が失敗した場合も公開を中止します。

## ローカルで確認

```sh
npm ci
npm test
npm run sync-researchmap
npm run build
npm run preview
```

通常の `npm run build` / `npm run dev` は保存済みスナップショットを使うため、ネット接続は不要です。
CSV は移行前の控えとして残しています。`data/researchmap.json` がある間は CSV の編集はサイトに反映されません。
自動同期を停止して CSV 運用に戻す場合は、ワークフローのスケジュール・取得ステップを無効化し、
スナップショットを削除してください。同期対象外の自己紹介文や写真は通常どおり編集できます。
