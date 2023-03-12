// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
  return renderLicenseLink(license);
  
  } else if (license === 'GPLv2'){
    return renderLicenseLink(license);
    
  } else if (license === 'Apache'){
    return renderLicenseLink(license);
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // console.log("license link ran");
  // console.log(license);
  if (license === "MIT"){
  return `![Mit License](https://img.shields.io/badge/license-MIT-green)`
  } else if (license === "GPLv2"){
    return `![General Public License, version 2](https://img.shields.io/badge/license-GPLv2-green)`
  } else if (license === "Apache"){
    return `![Apache License Version 2.0](https://img.shields.io/badge/license-Apache-green)`
  }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT"){
    // console.log("license section ran");
   return `


    MIT License
    
    Copyright (c) 2022 Thvt1guy
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
        `
  } else if (license === "GPLv2"){
    return `
    
    
    GNU GENERAL PUBLIC LICENSE
    Version 2, June 1991
    
    Copyright (C) 1989, 1991 Free Software Foundation, Inc.  
    51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA
    
    Everyone is permitted to copy and distribute verbatim copies
    of this license document, but changing it is not allowed.
    `
  } else if (license === "Apache"){
    return `
    
    
    Copyright 2023 Thvt1guy

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.`
  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.description}
 
  ## Table of Contents

  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  Reach me at https://github.com/${data.githubUsername}
`;
}

module.exports = generateMarkdown;
