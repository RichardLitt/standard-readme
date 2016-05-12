# Readme Standard

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](http://ipn.io)
[![](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](http://ipfs.io/)
[![](https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square)](http://webchat.freenode.net/?channels=%23ipfs)

> Standardize your Readmes

This repo is for standardizing how READMEs should look. The goal is to have: 
  - A well defined specification that other people could look to;
  - An example README that can be used for comparison (this README.md is the example);
  - A linter that can be used to look at errors in a given Readme;
  - A generator that can be used to quickly scaffold out new READMEs.

There are many standards. This is mine. 

** Table of Contents **

- [Installation](#installation-1)
- [Usage](#usage)
- [Contribute](#contribute)
- [Specification](#specification)
  - [Requirements](#requirements)
  - [Sections](#sections)
    - [Name](#name)
    - [one-line description](#one-line-description)
    - [Table of Contents](#table-of-contents)
    - [Usage Section](#usage-section)
    - [API](#api)
    - [Installation](#installation)
    - [License](#license)
  - [Suggestions](#suggestions)
    - [Background section](#background-section)
    - [Conventions](#conventions)
- [License](#license-1)

## Installation

_Note: This is a placeholder, at the moment._

This project uses [node][] and [npmjs][]. Go check them out if you don't have them locally installed.

```sh
npm i -g standard-readme
```

[node]: http://nodejs.org
[npmjs]: https://npmjs.com

## Usage

_Note: This is a placeholder, at the moment._

The settings are stored in the `.remarkrc` file. Ideally, this file should be added to each repository where
you plan to use `remark`. There are plans to enable a single `.remarkrc` to be used in multiple repos.

```sh
$ npm i -g remark
$ npm i
$ remark README.md -o README.md
```

## Contribute

Feel free to dive in! Open an issue or submit PRs.

## Specification

### Requirements

A compliant README must:
  - Be called README.md (with capitalization).
  - Be a valid Markdown file.

### Sections

#### Name
**Status:** Optional.

**Requirements:** 
- Must be first section.
- Must match repository name. If it cannot, there must be a note in the long description about why.
- Must match package manager name. If it cannot, there must be a note in the long description about why.

**Suggestions:** 
- Should be self-evident. 

#### Banner
**Status:** Optional.  
**Requirements:**
- Must link to local image in current repository.
- Must appear directly after the title.

#### Badges
**Requirements:**
- If present, must start on third line.
- Must be newline delimited.

#### one-line description
Requirements: 120 char or less.

#### Table of Contents
Requirements: There must be a Table of Contents that links to the 

#### Usage Section
Suggestions: Cover promises/callbacks, ES6 here.

#### API
Requirements: Describe internal objects and functions, signatures, return types, callbacks, and events. Types covered where not obvious. Caveats.

#### Installation
Requirements: Installation command.
Suggestions: Link to prerequisite sites for language. [npmjs][], [godocs][], etc.

#### License
Requirements: State License.
Suggestions: Link to longer License file.

### Suggestions

#### Background section
Requirements: Motivation, abstract dependencies

#### Conventions
cb for callback
num for Number
int for Integer
bool for Boolean
etc.

## License

MIT (c) Protocol Labs
