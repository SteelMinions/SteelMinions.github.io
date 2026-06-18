# STEEL MINIONS WEBSITE DEVELOPMENT Standard Operating Procedure (SOP)

---

### Version 1.0

### Date: 2024-06-01

### Author: Matthew Ryan Dudley

### Contact: matthewrdudley@gmail.com

---

# Table of Contents

1. [Introduction](#1-introduction)
2. [SOP Maintenance](#2-sop-maintenance)
3. [List of libraries and frameworks used](#3-list-of-libraries-and-frameworks-used)
4. [Project structure](#4-project-structure)
5. [HTML Structure](#5-html-structure)
6. [CSS Styling](#6-css-styling)
7. [JavaScript Functionality](#7-javascript-functionality)

## 1. Introduction

This document outlines the Standard Operating Procedure (SOP) for the development of the Steel Minions website.

## 2. SOP and Project Maintenance

### SOP Maintenance:

This SOP document will be reviewed and updated as necessary to ensure it remains relevant and accurate. Any changes to the SOP will be documented in the changelog file (CHANGELOG.md) with details of the changes made, the date of the change, and the author responsible for the change.

### Project Maintenance:

This project will be maintained using github, Any changes to the project must be documented in a new changelog entry in the CHANGELOG.md files, with details of the changes made, the date of the change, and the author responsible for the change. This will ensure that all changes are tracked and can be easily referenced in the future.

When making changes to the project, users must be on the "Development" branch this is to ensure that the main branch remains stable and free of any potential issues. Once changes have been made and tested on the development branch, they can be merged into the main branch following the standard pull request process.

All contributors to the project should follow this SOP and the guidelines outlined in the changeLog to ensure consistency and maintainability of the project.

All commits to the repository should include a clear title and brief description of the changes made, with a more detailed description of the commit held within the changeLog file.

## 3. List of libraries and frameworks used

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- jQuery 3.6

## 4. Project structure

- css/
  - styles.css
- js/
  - includes.js
- img/
  - content/
    - siteIcon.ico
  - game/
    - piecefall/
      - piecefall_poster
      - piecefall_gply1
      - piecefall_gply2
      - piecefall_gply3
    - racecarcrashers/
      - rcc_poster
      - rcc_gply1
      - rcc_gply2
      - rcc_gply3
    - thechantry/
      - theChantry_poster
      - theChantry_gply1
      - theChantry_gply2
      - theChantry_gply3
   - header/
      - header_logo
   - staff/
        - Andrew Hamilton_supervisor
        - Luke_Melbille_supervisor
        - Mark Featherstone Director
      
- lib/
  - bootstrap.min.css
  - bootstrap.min.js
- index.html
- about.html
- contact.html
- research.html

## 5. HTML Structure

Each HTML file will follow a consistent structure, including a header, main content area, and footer.

### Header

The header will include the website logo and navigation links to the main pages (Home, About, Contact, Research). The header will be consistent across all pages and will be maintained in the includes.js file for easy updates.

### Main Content Area

The main content area will be unique to each page, containing relevant information and media. The structure of the main content will be organized using semantic HTML elements (e.g., <section>, <article>, <aside>) containers on pages can either have a shared layout or unique styling associated with them via class names, and any container that will be affected by javascript will require appropriate class names or IDs for targeting.

Sectioning of the content in to catagories such as Header, Main, and Footer will be done using <div class="header">, <div class="main">, and <div class="footer"> respectively, to allow for easy styling and maintenance. Whilst also containing the necessary labels such as <header>, <main>, and <footer> for semantic purposes and direct targeting. This format will be used across all pages to maintain consistency and ease of maintenance.

### Footer

The footer will include copyright information and any relevant links (e.g., privacy policy, terms of service). The footer will also be consistent across all pages and will be maintained in the includes.js file for easy updates.

## 6. CSS Styling

The styles.css file will contain custom styles for the website, while Bootstrap will be used for responsive design and pre-built components.

Any new styles will be added to the styles.css file and organized by section or component for easy maintenance. New CSS files can be created and added to the css/ folder if necessary, and linked in the HTML files.

If using Bootstrap components, the relevant classes will be added to the HTML elements, and any necessary custom styles will be added to the styles.css file to ensure a cohesive design.

## 7. JavaScript Functionality

The includes.js file will be used to maintain a consistent header across all pages. Additional JavaScript functionality will be added as needed in either the main.js file or relevant JavaScript files.

Any new .js files will be added to the js/ folder and named appropriately to the task they are intended for, then linked in the HTML files.

### Includes.js

The includes.js file containtS the code necessary to import the header and footer components across all pages. This will allow for easier updates to the header and footer, as changes will only need to be made in one place. The includes.js file will be linked in all HTML files to ensure the header and footer are consistent across the website.


### customCarousels.js

The customCarousels.js file containS the code necessary to implement the multi-item carousel functionality across the website. This will allow for a more dynamic and engaging user experience, as users can view multiple items in a single carousel.
