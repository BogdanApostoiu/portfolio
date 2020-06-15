import React from 'react';
import {
  Wrapper,
  Row,
  Heading,
  Separator,
  RowContent,
  Icon,
  IconWrapper,
  IconTooltip,
} from './styles';
import { SectionSeparator } from '../../styles/layouts';

import js from '../../assets/icons/javascript.svg';
import html from '../../assets/icons/html5.svg';
import css from '../../assets/icons/css3.svg';
import reactjs from '../../assets/icons/reactjs.svg';
import angularjs from '../../assets/icons/angularjs.svg';
import vuejs from '../../assets/icons/vuejs.svg';
import redux from '../../assets/icons/redux.svg';
import nodejs from '../../assets/icons/nodejs.svg';
import expressjs from '../../assets/icons/expressjs.svg';
import firebase from '../../assets/icons/firebase.svg';
import amazons3 from '../../assets/icons/amazon-s3.svg';
import netlify from '../../assets/icons/netlify.svg';
import gql from '../../assets/icons/gql.svg';
import contentful from '../../assets/icons/contentful.svg';
import vscode from '../../assets/icons/vscode.svg';
import npm from '../../assets/icons/npm.svg';
import jira from '../../assets/icons/jira.svg';
import git from '../../assets/icons/git.svg';
import github from '../../assets/icons/github.svg';
import slack from '../../assets/icons/slack.svg';

const Badge = ({ src, alt }) => (
  <IconWrapper>
    <IconTooltip>{alt}</IconTooltip>
    <Icon src={src} alt={alt} />
  </IconWrapper>
);

export const Skills = () => (
  <Wrapper>
    <Row>
      <Heading>The Mandatory</Heading>
      <Separator />
      <RowContent>
        <Badge src={js} alt="JavaScript" />
        <Badge src={html} alt="HTML 5" />
        <Badge src={css} alt="CSS 3" />
      </RowContent>
    </Row>
    <Row>
      <Heading>Client Side</Heading>
      <Separator />
      <RowContent>
        <Badge src={reactjs} alt="React.js" />
        <Badge src={vuejs} alt="VueJS" />
        <Badge src={angularjs} alt="AngularJS" />
        <Badge src={redux} alt="Redux" />
      </RowContent>
    </Row>
    <Row>
      <Heading>Server Side</Heading>
      <Separator />
      <RowContent>
        <Badge src={nodejs} alt="Node.js" />
        <Badge src={expressjs} alt="ExpressJS" />
      </RowContent>
    </Row>
    <Row>
      <Heading>Serverless</Heading>
      <Separator />
      <RowContent>
        <Badge src={firebase} alt="Firebase" />
        <Badge src={netlify} alt="Netlify" />
        <Badge src={amazons3} alt="Amazon S3" />
      </RowContent>
    </Row>
    <Row>
      <Heading>Have Tinkered with</Heading>
      <Separator />
      <RowContent>
        <Badge src={gql} alt="GraphQL" />
        <Badge src={contentful} alt="Contentful" />
      </RowContent>
    </Row>
    <Row>
      <Heading>Tools</Heading>
      <Separator />
      <RowContent>
        <Badge src={vscode} alt="VSCode" />
        <Badge src={npm} alt="NPM" />
        <Badge src={git} alt="Git" />
        <Badge src={github} alt="GitHub" />
        <Badge src={jira} alt="Jira" />
        <Badge src={slack} alt="Slack" />
      </RowContent>
    </Row>

    <SectionSeparator />
  </Wrapper>
);

export default Skills;
