// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![MIT](https://img.shields.io/badge/license-MIT-blue)";
  } else if (license === "APACHE 2.0") {
    return "![APACHE 2.0](https://img.shields.io/badge/license-APACHE-2.0-yellow)";
  } else if (license === "GPL 3.0") {
    return "![GPL 3.0](https://img.shields.io/badge/license-GPLv3-brightgreen)";
  } else if (license === "BSD 3") {
    return "![BSD 3](https://img.shields.io/badge/license-BSDv3-yellow)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Unlicensed" || license === "Other" || license === "None") {
    return "";
  } else {
    return "- [License](#license)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "Unlicensed" || license === "Other") {
    return "";
  } else {
    return `### License
    Licensed under the ${license} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
${renderLicenseLink(data.license)}
- [Contact](#contact)



### Description 
${data.projectdescription}

### Installation

### Usage


### Test

${renderLicenseSection(data.license)}

### Contact
For more information, visit my github: https://github.com/${data.username}

OR

If you would like to report issues or collaborate, please email me at: [${
    data.email
  }](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
