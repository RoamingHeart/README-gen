// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'N/A') {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)]`
  }
  return ``
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'N/A') {
    return `${renderLicenseBadge(license)}(https://opensource.org/licenses/${license})`
  }
  return ``
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'N/A') {
    return (
      `## License <a name="license"></a>
      
This Project is using licenses the ${license} license`
    )
  }
  return ``
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.pname}
  
${renderLicenseLink(data.license)}

## Description
  ${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation <a name="installation"></a>

  The following necessary dependencies must be installed to run the application properly: ${data.install}

## Usage <a name="usage"></a>

  ​This application is used for ${data.use}

${renderLicenseSection(data.license)}

## Contributing <a name="contributing"></a>

​  Contributors: ${data.contribute}

## Tests <a name="tests"></a>

  To run tests, you need to run the following command: ${data.test}

## Questions <a name="questions"></a>

  If you have any questions about the repo, open an issue or contact ${data.username} directly ${data.email}.


`;
}

module.exports = generateMarkdown;
