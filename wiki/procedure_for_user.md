# Academic Website Template User Guide

This guide explains the process of forking an academic website template, replacing it with your own information, and publishing it on GitHub Pages. All steps can be completed entirely on GitHub.

> **Note**: This template is available in English and Japanese. If you do not need Japanese, please enter the Japanese field in English as well.

- Step 1-2: Fork the repository to your own GitHub account and make the basic settings.
- Step 3-7: Write your information.
- Step 8-9: Publish on GitHub pages using the script.

## Table of Contents

- [Academic Website Template User Guide](#academic-website-template-user-guide)
  - [Table of Contents](#table-of-contents)
  - [0. Preliminary Preparation](#0-preliminary-preparation)
    - [1. create a GitHub account](#1-create-a-github-account)
  - [1. Fork the repository on GitHub](#1-fork-the-repository-on-github)
  - [2. Grant write permissions to GitHub Actions](#2-grant-write-permissions-to-github-actions)
  - [3. Edit profile information](#3-edit-profile-information)
    - [Edit English configuration file](#edit-english-configuration-file)
    - [Edit Japanese configuration file](#edit-japanese-configuration-file)
  - [4. Configure homepage and multilingual support](#4-configure-homepage-and-multilingual-support)
    - [English bio](#english-bio)
    - [Japanese bio](#japanese-bio)
  - [5. Updating Research Achievements](#5-updating-research-achievements)
    - [Retrieving Data from Researchmap](#retrieving-data-from-researchmap)
    - [Uploading CSV Files](#uploading-csv-files)
    - [Directly Editing Existing CSV Files](#directly-editing-existing-csv-files)
    - [Editing Project Information (Generally Not Required)](#editing-project-information-generally-not-required)
  - [7. Changing Profile Images and Favicon](#7-changing-profile-images-and-favicon)
    - [Changing Images](#changing-images)
  - [8. SEO Optimization Customization](#8-seo-optimization-customization)
    - [Generating sitemap.xml and robots.txt](#generating-sitemapxml-and-robotstxt)
    - [Editing index.html](#editing-indexhtml)
  - [9. Publish on GitHub Pages](#9-publish-on-github-pages)
    - [1. Change repository settings](#1-change-repository-settings)
    - [2. Deploy github pages](#2-deploy-github-pages)
    - [3. Re-run the deployment workflow](#3-re-run-the-deployment-workflow)
  - [10. Troubleshooting](#10-troubleshooting)
    - [domain problem](#domain-problem)
    - [API data generation issues](#api-data-generation-issues)
    - [Multilingual switching issues](#multilingual-switching-issues)
    - [Build errors](#build-errors)
    - [Other issues](#other-issues)
  - [Extended Customization](#extended-customization)

## 0. Preliminary Preparation

Please do any prerequisite work that is not already done as required.

### 1. create a GitHub account

- Go to the official GitHub website [https://github.com/](https://github.com/).
- Click the "Sign up" button in the upper right corner.
- Username: Enter your name for your activity on GitHub. A name that is friendly and describes you is good. Basically, the domain of this personal page is [https://username.github.io/](https://username.github.io/), so we recommend an account name that relates to your name, such as `firstname-lastname`.

## 1. Fork the repository on GitHub

First, fork the template repository to your GitHub account.

> **Note**: **Fork** means copying the parent repository in sigma-users to your GitHub account.  
> **Note**: **Repositoty** means the place to store your code. It is similar to the folder or directory.

1. Go to the template repository page (https://github.com/sigma-users/personal-website-template)
2. Click the "Fork" button in the top right
3. The repository name must be changed from `personal-website-template` to your user name (`yourusername.github.io`)
4. Click the "Create Fork" button to complete the process

> **Tip**: You must name the repository `yourgithubusername.github.io` .

## 2. Grant write permissions to GitHub Actions

First, set up the page to build automatically

1. click on the "Actions" tab on the page of the repository you forked
2. click on "I understand my workflows, go ahead and enable them"  

Set permissions to allow the deployment workflow to write to the gh-pages branch:

1. Click the "Settings" tab on your repository page
2. From the left menu, click "Actions" → "General"
3. Scroll to the "Workflow permissions" section
4. Select the "Read and write permissions" option
5. Click the "Save" button to save the changes

## 3. Edit profile information

From step 3 to 7, you can write your personal information one by one.
Edit the multilingual configuration files to update your profile information.

### Edit English configuration file

1. In your forked repository, open the `public/locales/en/translations.json` file
2. Click "Edit this file" (the pencil icon)
3. Replace the following sections with your information:
   - `header.name`: Name displayed in the header
   - `bio.name`: English name
   - `bio.nameJp`: Japanese name
   - `bio.phd`: English PhD name if applicable (set to `""` if not)
   - `bio.phdJp`: Japanese PhD name if applicable (set to `""` if not)
   - `bio.position`: Position (e.g., "Associate Professor")
   - `bio.affiliation`: Affiliation (e.g., "Department of Engineering, University of Tokyo")
   - `bio.email`: Email address
   - `bio.github`, `bio.scholar`, `bio.orcid`, `bio.researchmap`: Links to your profile pages (set to `""` if not)
   - `bio.researchTags`: Array of research keywords
   - `contact.emailAdress`: EMail adress（`hoge[at]sigma.t.u-tokyo.ac.jp`）
   - `contact.phoneNumber`: Phone number
   - `contact.addressLine1`, `contact.addressLine2`, `contact.addressLine3`: Address lines
   - `contact.linkedin`, `contact.facebook`, `contact.twitter`: Social media links (set to `""` if not)

> **Tip**: For unnecessary items, set an empty string `""` or enter `null`.

> **Tip**: If you want to remove the social media links at the bottom of the page, set `contact.socialMedia` to `""`.

4. Click the "Commit changes..." button to save changes

> **Note**: **Commit** means to save the changes. 

5. Enter a commit message (e.g., "Update English profile information") and click "Commit changes"

> **Tip**: It is **not** recommended to write empty or meaningless commit messages, because it makes it difficult to understand what you did afterwards.  

### Edit Japanese configuration file

1. Similarly, open the `public/locales/ja/translations.json` file
2. Click "Edit this file"
3. Replace the same sections with your Japanese information
4. Click the "Commit changes..." button to save changes

> **Note**: This template is available in English and Japanese. If you do not need Japanese, please enter the Japanese field in English as well.

## 4. Configure homepage and multilingual support

Edit the bio (biography) markdown files.

### English bio

1. Open the `public/content/bio/bio_en.md` file
2. Click "Edit this file"
3. Rewrite your bio in markdown format:
   - Use headings (`##`) to structure your content
   - Describe your research, career highlights, specialties, etc.
   - Utilize bullet points (`-`) as needed
   - You can use 'Preview' button to check the format.
4. Click the "Commit changes..." button to save changes

> **Tip**: By default, GitHub and ORCID are displayed as icons. If you prefer to display them as text, set `bio.github`, `bio.orcid`, etc., to `""` and include them in this markdown file as `- GitHub: [https://github.com](https://github.com)`. Refer to the examples in this template for guidance.

### Japanese bio

1. Open the `public/content/bio/bio_ja.md` file
2. Click "Edit this file"
3. Rewrite the same content in Japanese
4. Click the "Commit changes..." button to save changes

## 5. Updating Research Achievements

Update research achievements (papers, presentations, and others), awards, and research funding information using CSV files. 

### Retrieving Data from Researchmap

1. Log in to Researchmap (https://researchmap.jp/).
2. Click on the "Achievements" tab in your My Portal.
3. In the "Papers" or "Presentations" section, click "Export" to download the CSV file.

### Uploading CSV Files

1. Open the `data` directory in your forked repository.
2. Click "Add file" → "Upload files."
3. Upload the downloaded papers CSV file as `rm_published_papers.csv`.
4. Upload the downloaded presentations CSV file as `rm_presentations.csv`.
5. Upload the downloaded miscellaneous (proceedings, commentary articles, etc.) CSV file as `rm_misc.csv`.
6. Upload the downloaded awards CSV file as `rm_awards.csv`.
7. Upload the downloaded projects CSV file as `rm_research_projects.csv`.
8. Click the "Commit changes..." button to commit the changes.

> **Note**: If the format or column names of the CSV files differ from the template's expectations, you may need to edit the `scripts/generatePublicApi.cjs` file to adjust the mapping.

### Directly Editing Existing CSV Files

1. Open the `data/rm_published_papers.csv` file.
2. Click "Edit this file."
3. Edit the paper information following the CSV format:
   ```
   published_papers
   ID,タイトル(英語),タイトル(日本語),著者(英語),著者(日本語),誌名(英語),誌名(日本語),出版年月,DOI,主要な業績かどうか
   paper-1,Your Paper Title,あなたの論文タイトル,"Author 1, Author 2","著者1, 著者2",Journal Name,ジャーナル名,2023-01,10.1234/abcd,true
   ```
4. Save the changes.
5. Similarly, update `data/rm_presentations.csv`:
   ```
   presentations
   ID,タイトル(英語),タイトル(日本語),講演者(英語),講演者(日本語),会議名(英語),会議名(日本語),発表年月日,開催地(英語),開催地(日本語),招待の有無
   presentation-1,Your Presentation Title,あなたの発表タイトル,"Author 1, Author 2","著者1, 著者2",Conference Name,会議名,2023-01-01,Location,場所,false
   ```
6. Similarly, update `data/rm_misc.csv`:
   ```
   misc
   ID,タイトル(英語),タイトル(日本語),著者(英語),著者(日本語),誌名(英語),誌名(日本語),出版年月,DOI,主要な業績かどうか
   paper-1,Your Paper Title,あなたの論文タイトル,"Author 1, Author 2","著者1, 著者2",Journal Name,ジャーナル名,2023-01,10.1234/abcd,false
   ```
7. Similarly, update `data/rm_awards.csv`:
   ```
   awards
   ID,賞名(日本語),賞名(英語),タイトル(日本語),タイトル(英語),授与機関(日本語),授与機関(英語),受賞年月,主要な業績かどうか
   example-id
8. Similarly, update `data/rm_research_projects.csv`:
   ```
   research_projects
   ID,タイトル(日本語),タイトル(英語),提供機関(日本語),提供機関(英語),制度名(日本語),制度名(英語),研究種目(日本語),研究種目(英語),研究期間(From),研究期間(To),課題番号,主要な業績かどうか
   example-id,これは説明用のレコードです,"This is an example record for explanation purposes",提供機関(例),"Funder (Example)",制度名(例),"Program Name (Example)",研究種目(例),"Research Category (Example)",2023-12,2024-12,例-課題番号,false
   ```

> **Note**: The first row will be skipped, so enter the header in the second row and records from the third row onward.

> **Note**: Do not edit the header; only edit from the third row onward.

> **Note**: CSV elements are generally separated by commas. For multiple authors, enclose them in `""` like `"Author1, Author2"` or `"[Author1, Author2]"`.

> **Note**: Unnecessary fields can be left blank or set to `null` to make them not appear.

> **Note**: The header column names are written in Japanese. Below are the English explanations for each column name:
> - `ID`: A unique identifier for each record.
> - `タイトル(日本語)`: Title in Japanese.
> - `タイトル(英語)`: Title in English.
> - `著者(日本語)`: Author names in Japanese. ("著者1, 著者2").
> - `著者(英語)`: Author names in English. ("Author 1, Author 2").
> - `誌名(日本語)`: Journal name in Japanese.
> - `誌名(英語)`: Journal name in English.
> - `出版年月`: Publication date (YYYY-MM format).
> - `DOI`: Digital Object Identifier (DOI).
> - `主要な業績かどうか`: Whether it is a major achievement (true/false).
> - `講演者(日本語)`: Speaker names in Japanese. ("著者1, 著者2").
> - `講演者(英語)`: Speaker names in English. ("Author 1, Author 2").
> - `会議名(日本語)`: Conference name in Japanese (international conference).
> - `会議名(英語)`: Conference name in English (international conference).
> - `発表年月日`: Presentation date (YYYY-MM-DD format).
> - `開催地(日本語)`: Location in Japanese.
> - `開催地(英語)`: Location in English.
> - `招待の有無`: Whether it was an invited presentation (true/false).
> - `賞名(日本語)`: Award name in Japanese.
> - `賞名(英語)`: Award name in English.
> - `授与機関(日本語)`: Awarding institution in Japanese.
> - `授与機関(英語)`: Awarding institution in English.
> - `受賞年月`: Award date (YYYY-MM format).
> - `制度名(日本語)`: Program name in Japanese.
> - `制度名(英語)`: Program name in English.
> - `研究種目(日本語)`: Research category in Japanese.
> - `研究種目(英語)`: Research category in English.
> - `研究期間(From)`: Research start date (YYYY-MM-DD format).
> - `研究期間(To)`: Research end date (YYYY-MM-DD format).
> - `課題番号`: Research project number.

## 6. Editing Career Information

Edit the career JSON files.

### Editing Career Information

1. Open the `public/content/career/career_en.json` file.
2. Click "Edit this file."
3. Enter your academic and professional history following the JSON format:
   ```json
   [
     {
       "id": "career-1",
       "position": "Your Position",
       "organization": "Your Organization",
       "location": "Location",
       "startDate": "2020",
       "endDate": null,  // Use null for current positions
       "description": "Description of your role",
       "type": "work"    // "work" or "education"
     },
     // Other career entries...
   ]
   ```
4. Click "Commit changes..." to save.
5. Similarly, update `public/content/career/career_ja.json` with Japanese information.

> **Note**: Ensure `"id"` is consistent between Japanese and English files. The order of entries does not matter.

> **Note**: Strings must be enclosed in double quotation marks. Single quotation marks are not allowed.

> **NOTE**: Be careful not to put a comma after the last element .Doing so will result in a parsing error.

> **NOTE**: Comments are not officially allowed in JSON files .Instead, you must write your comments in a separate document or program.

### Editing Project Information (Generally Not Required)

Edit any non-Grant projects; Grant should be edited in `rm_research_projects.csv`. By default, this field is not displayed.

1. Open the `public/content/etc/projects_en.json` file.
2. Enter your project information:
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
     // Other project entries...
   ]
   ```
3. Save the changes.
4. Similarly, update `public/content/etc/projects_ja.json` with Japanese information.

> **Note**: Ensure `"id"` is consistent between Japanese and English files. The order of entries does not matter.

> **Tip**: If there are no applicable items, leave the JSON file empty but keep the file:
```json
   [
   ]
```

## 7. Changing Profile Images and Favicon

### Changing Images

Change your profile image and lab logo.

1. Open the `public/images` directory in your forked repository
2. Click "Add file" → "Upload files"
3. Upload your new profile image named `profile.png`
   - Or replace the existing `profile.png`
4. Click the "Commit changes..." button to commit your changes

> **Tip**: Pay attention to image size and aspect ratio. A square format (1:1) is recommended for profile images, while a landscape format is recommended for logos.


## 8. SEO Optimization Customization

### Generating sitemap.xml and robots.txt

Change the URL to your GitHub Pages URL.
1. Open the `scripts/generateSeoFiles.cjs` file in your forked repository
2. Replace the following section with your GitHub username:
   ```javascript
   // Configuration - Please change the site URL to your actual one
   const SITE_URL = 'https://username.github.io';
   ```
3. Save and commit your changes

> **Tip**: This will generate `https://username.github.io/sitemap.xml` and `https://username.github.io/robots.txt`.

### Editing index.html

Customize the SEO and Google Search Console information in the index.html file.

1. Open the `index.html` file in your forked repository
2. Replace the following information with your GitHub username or full name:
   - Change the content inside the `<title>` tag to your name
   - Edit the `content` attribute of `<meta name="description">` to match your research
   - Change the `content` attribute of `<meta name="author">` to your name
   - Change the `href` attribute of `<link rel="canonical">` to the URL of your GitHub Pages
   - Change `"url"` and `"target"` in `<script type="application/ld+json">` to the URL of your GitHub Pages
3. Save and commit your changes

> **Tip**: Proper SEO configuration improves how your site appears in search engines.

## 9. Publish on GitHub Pages

### 1. Change repository settings

Change the basic settings of your forked repository.

1. Click the "Settings" tab on the page of the forked repository in your GitHub account.
2. Find the "Pages" section in the left-hand menu.
3. Select "Deploy from a branch" as the source (to use the deployment workflow).  
   Set the branch as `gh-pages` and `/(root)`, and click the "Save" button.  

> **Note**: If there is no deployment workflow, you will set it up in a later step.

### 2. Deploy github pages

After a "push/commit" action, the GitHub page is generated.  
Publish your site on GitHub Pages.

1. Perform a null "push" in arbitrary one page (ex. edit and add space in `/content/bio/bio_en.md`, and "Commit changes...").
> **Tip**: A page updating is triggered by any "push". At the first time, it would be safe to perform this "null push".  
2. Click the "Actions" tab in your forked repository
3. Find and select the "Deploy to GitHub Pages" workflow
   - If the workflow is already running or completed, check its results
   - When the "pages build and deployment" is executed and the green icon is complete, you are done
4. After the workflow succeeds, check the published URL in "Settings" → "Pages"

> **Tip**: **It may take several minutes for your changes to appear on the page.**  Please be patient.

> **Tip**: The initial deployment may take a few minutes. Please be patient.

> **Tip**: To check your revision in your page, please use the shortcut `ctrl` + `shift` + `R`.

> **Tip**: After the second time, it may take some time after completion before it is reflected on the page.

### 3. Re-run the deployment workflow
If needed, re-run the workflow with these steps:

1. Click the "Actions" tab on your repository page
2. Select "Deploy to GitHub Pages" from the "Workflows" on the left
3. Click the "Run workflow" button in the top right
4. Click the "Run workflow" button again to start the execution

## 10. Troubleshooting

Here are some solutions for common issues.

### domain problem
- **Symptom**: Photos, etc. are not displaying
- **Solution**: 1.
  1. check the URL of the page and make sure it is [https://username.github.io](https://username.github.io)
  If it is not (e.g. [https://username.github.io/personal-website-template] with an extraIf not, change the repository name to `username.github.io`.

### API data generation issues

- **Symptom**: Papers or presentations data not displaying
- **Solution**: Check if the API data generation script is running correctly in GitHub Actions
  1. Check the latest workflow execution in the "Actions" tab of your repository
  2. If there are errors, check the CSV file format
  3. If necessary, edit `scripts/generatePublicApi.cjs` to adjust the CSV column name mapping

### Multilingual switching issues

- **Symptom**: Content doesn't change or display when switching languages
- **Solution**: Check if language files are loading correctly
  1. Open the Network tab in your browser's developer tools
  2. Check if the corresponding language file (`translations.json`) is loading successfully
  3. If necessary, check the settings in `src/i18n.ts`

### Build errors

- **Symptom**: GitHub Actions build fails
- **Solution**:
  1. Check the workflow logs to identify the specific error
  2. Common causes:
     - JSON file syntax errors (extra commas or missing closing brackets)
     - Missing required files
     - Path issues

### Other issues

If you have problems not resolved by the above:
1. Search for existing issues in the template repository's GitHub Issues
2. If no solution is found, create a new Issue to ask your question

## Extended Customization

After completing the basic setup, you can further customize these parts:

1. Change the color scheme in `tailwind.config.js`
2. Edit component files in `src/components` to adjust the layout and functionality
3. Update meta tags in `public/index.html`

---

I hope this guide helps you create a wonderful academic website! If you have any improvements or questions, please share them through Issues or pull requests.

Happy coding! 🚀
