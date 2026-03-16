# <img src="/assets/zenclip/logo.png" class="themed-logo light-only" alt="ZenClip Logo" /><img src="/assets/zenclip/logo-white.png" class="themed-logo dark-only" alt="ZenClip Logo" /> ZenClip の使い方

**ZenClip** は、Windowsのタスクトレイに常駐するAI搭載のクリップボードマネージャーです。
ローカル環境の **Gemini CLI** または **GitHub Copilot CLI** と連携し、作業の手を止めることなく、クリップボードのテキストをカスタムプロンプトで瞬時に処理します。

**基本無料（機能制限あり）** でご利用いただけます。PolarでProライセンスを購入いただくことで、すべての機能が解放されます。

![デモ動画](/assets/zenclip/demo.ja.gif)

---

## ⚠️ 前提条件 (必須)

本アプリを利用するには、お使いのPCに以下のいずれか（または両方）のCLIツールがインストールされており、コマンドラインから実行できる状態になっている必要があります。

1. **[Gemini CLI](https://geminicli.com/)**: `gemini` コマンドが実行可能であること。
2. **[GitHub Copilot CLI](https://github.com/features/copilot/cli)**: `copilot` コマンドが実行可能であること。

*事前に、使用するCLIツールのセットアップを完了させてからご利用ください。*

---

## ✨ 主な機能

- **従量課金API不使用**: GoogleやGitHubが提供しているCLIアプリ経由のため、従量課金制のAPIは一切使用していません。お財布に優しくAIを手軽に利用できます。
- **瞬時のAI処理**: テキストをコピーしてショートカットキー（デフォルト: `Ctrl + Shift + C`）を押すだけで、AIがバックグラウンドで処理を実行します。
- **マルチエンジン対応**: Gemini CLI だけでなく、GitHub Copilot CLI もエンジンとして選択可能です。
- **邪魔にならない設計**: タスクトレイに静かに常駐。処理中は極小のOSDが表示され、完了は通知でお知らせします。
- **カスタムプロンプト**: 用途に合わせたAIへの指示（プロンプト）を自由に追加・管理できます。
  ![Prompt Editor](/assets/zenclip/PromptWindow.ja.png)
- **履歴管理**: AIの応答を自動保存。履歴ウィンドウから過去の結果を確認・再利用したり、複数選択して一括削除することが可能です。

  ![History](/assets/zenclip/HistoryWindow.ja.png)
- **多言語対応**: UIは英語と日本語に対応（OSの言語設定に合わせて自動で切り替わります）。

### アイコンの状態
タスクトレイのアイコンは、ステータスに応じて以下のように変化します。

| 状態 | アイコン | 説明 |
| :--- | :--- | :--- |
| **待機中** | ![](/assets/zenclip/TrayIcon_Idle.png) | 準備完了の状態です。 |
| **処理中** | ![](/assets/zenclip/TrayIcon_Processing.png) | AIがリクエストを処理しています。 |
| **エラー** | ![](/assets/zenclip/TrayIcon_Error.png) | 処理に失敗しました。CLIツールの状態を確認してください。 |

---

## 💎 Free vs Pro 機能比較

ライセンスキーを入力しない場合でもFree版としてお使いいただけます。

| カテゴリ | 機能 | Free版 | Pro版 (License) |
| :--- | :--- | :--- | :--- |
| **制限** | プロンプト登録数 | 最大 3 つ | **無制限** |
| **制限** | 履歴保持件数 | 最大 20 件 | **無制限** |
| **AIモデル** | モデル個別指定 | デフォルト固定 | **個別選択可能** |

### Pro版ライセンスの購入
すべての機能を解放したい場合は、ライセンスをご購入ください。
**[🛒 ZenClip Pro ライセンスを Polar で購入する](https://buy.polar.sh/polar_cl_uYQimxvpseP80yopub0uTZO2tXZqXDseLS68r0TCXBv)**

*※立ち上げたばかりのプロジェクトであり完成度は道半ばですが、寄付を兼ねた温かいご支援として購入いただけると幸いです。*

---

## 🚀 使い方

### 1. インストール
1. **[最新のリリースページ](https://github.com/saka-guchi/zen-clip/releases/latest)** から ZIPファイルをダウンロードします。
2. 任意のフォルダに展開し、`ZenClip.exe` を起動します。

### 2. テキストの処理
1. 処理したいテキストを**選択してコピー**します。
2. ショートカット **`<Ctrl> + <Shift> + C`** を押します。<br/>
  ![OSD](/assets/zenclip/ProcessingOsdWindow.ja.png)
3. **即座にAI処理が開始**され、結果は自動的にクリップボードにコピーされます（設定で変更可能）。<br/>
  ![Toast](/assets/zenclip/ToastWindow.ja.png)