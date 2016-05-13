# Standard Readme

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](http://ipn.io)
[![](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](http://ipfs.io/)
[![](https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square)](http://webchat.freenode.net/?channels=%23ipfs)

> Readme Standard Style

This repo is for standardizing how READMEs should look. The goal is to have: 
  - A well defined specification that other people could look to;
  - An example README that can be used for comparison (this README.md is the example);
  - A linter that can be used to look at errors in a given Readme;
  - A generator that can be used to quickly scaffold out new READMEs.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Specification](#specification)
  - [Requirements](#requirements)
  - [Sections](#sections)
    - [Title](#title)
    - [Banner](#banner)
    - [Badges](#badges)
    - [Short Description](#short-description)
    - [Long Description](#long-description)
    - [Table of Contents](#table-of-contents)
    - [Security](#security)
    - [Background section](#background-section)
    - [Installation](#installation-1)
    - [Usage Section](#usage-section)
    - [Extra Sections](#extra-sections)
    - [API](#api)
    - [Contribute](#contribute-1)
    - [License](#license)
- [Contribute](#contribute)
- [License](#license-1)

## Background

Standard Readme started with in the issue originally posed by [@maxogden](https://github.com/maxogden) over at [feross/standard](https://github.com/feross/standard) in [this issue](https://github.com/feross/standard/issues/141). A lot of that discussion ended up in [zcei's standard-readme](https://github.com/zcei/standard-readme/issues/1) repository. While working on maintaining the [IPFS](https://github.com/ipfs) repositories, I needed a way to standardize Readmes. This is a result of that.

### Goals:
1. A well defined **specification**. This can be found in the [Specification](#specification) section. It is a constant work in progress; please open issues to discuss changes.
2. **An example README**. This Readme is fully standard-readme compliant.
3. A **linter** that can be used to look at errors in a given Readme. Please refer to the [tracking issue](https://github.com/RichardLitt/standard-readme/issues/5).
4. A **generator** that can be used to quickly scaffold out new READMEs. Please refer to the [tracking issue](https://github.com/RichardLitt/standard-readme/issues/6).
5. A **compliant badge** for users.

## Installation

This project uses [node][] and [npm][]. Go check them out if you don't have them locally installed.

```sh
$ npm i -g standard-readme
```

## Usage

Currently, this is only a Readme spec. 

```
$ standard-readme
// Will output spec (this Readme)
```

## Specification

### Requirements

A compliant README must:
  - Be called README.md (with capitalization).
  - Be a valid Markdown file.
  - Sections must appear in order delineated below. Optional sections may be omitted.
  - Must be new lines between each section.

### Sections

#### Title
**Status:** Required.  
**Requirements:**
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
**Status:** Optional.  
**Requirements:**
- Must be newline delimited.

#### Short Description
**Status:** Required.  
**Requirements:**
- Must be less than 120 characters.
- Must start with `> `
- Must be on it's own line.
- Must match the description in the packager manager's `description` field. 
- Must match GitHub's description (if on GitHub).

**Suggestions:**
- Use [gh-description](https://github.com/RichardLitt/gh-description) to set and get GitHub description.
- Use `npm show . description` to show the description from a local [npm][] package.

#### Long Description
**Status:** Optional.  
**Requirements:**
- Must have no heading.

**Suggestions:**
- If too long, consider moving to the [Background](#background) section.
- Cover the main reasons for building the repository.

#### Table of Contents
**Status:** Required.  
**Requirements:**
- Must link to all Markdown sections in the file.
- Must start with the next section; do not include the title or Table of Contents headings.

#### Security
**Status**: Optional.  
**Requirements:**
- May go here if visibility of security section is important. Otherwise, should be in [Extra Sections](#extra-sections).

#### Background section
**Status:** Optional.  
**Requirements:**
- Cover motivation.
- Cover abstract dependencies.
- Cover intellecutal provenance: A `See Also` section is also fitting.

#### Installation
**Status:** Required.  
**Requirements:**
- Code block illustrating how to install.

Subsections:
- `Dependencies`. Required if necessary.
- `Updating`. Optional.

**Suggestions:**
- Link to prerequisite sites for language. [npmjs][], [godocs][], etc.
- Include any system-specific information needed for Installation.
- Subsection for dependencies needed for install to work. 

#### Usage Section
**Status:** Required.  
**Requirements:**
- Code block illustrating common usage.
- If CLI compatible, code block indicating common usage.
- If importable, code block indicating both import functionality and usage. 

Subsections:
- `CLI`. Required if CLI functionality exists.
- If relevant, point to a runnable file for the usage code.

**Suggestions:**
- Cover basic choices that may affect usage: for instance, if JavaScript, cover promises/callbacks, ES6 here.

#### Extra Sections
**Status**: Optional.  
**Requirements:**
- None.

#### API
**Status:** Optional.  
**Requirements:**
- Describe exported functions and objects.

**Suggestions:**
- Describe signatures, return types, callbacks, and events.
- Cover types covered where not obvious.
- Describe caveats.

#### Contribute
**Status**: Required.  
**Requirements:**
- Link to `CONTRIBUTE.md` file if there is one.
- State where users can ask questions.
- State whether PRs are accepted.
- List any requirements for contributing; for instance, having a sign-off on commits.

**Suggestions:**
- Be as friendly as possible.
- Link to the GitHub issues.

#### License
**Status:** Required.  
**Requirements:**
- State license initials or name.
- State license owner.
- Must be last section.

**Suggestions:**
- Link to longer License file in local repository.

## Contribute

Feel free to dive in! [Open an issue](https://github.com/RichardLitt/standard-readme/issues/new) or submit PRs.

## License

MIT (c) Protocol Labs

[node]: http://nodejs.org
[npm]: https://npmjs.com