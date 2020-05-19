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
        <Badge src={js} alt="javascript" />
        <Badge src={html} alt="html5" />
        <Badge src={css} alt="css3" />
      </RowContent>
    </Row>
    <Row>
      <Heading>Client Side</Heading>
      <Separator />
      <RowContent>
        <Badge src={reactjs} alt="reactjs" />
        <Badge src={vuejs} alt="vuejs" />
        <Badge src={angularjs} alt="angularjs" />
        <Badge src={redux} alt="redux" />
      </RowContent>
    </Row>
    <Row>
      <Heading>Server Side</Heading>
      <Separator />
      <RowContent>
        <Badge src={nodejs} alt="nodejs" />
        <Badge src={expressjs} alt="expressjs" />
      </RowContent>
    </Row>
    <Row>
      <Heading>Serverless</Heading>
      <Separator />
      <RowContent>
        <Badge src={firebase} alt="firebase" />
        <Badge src={netlify} alt="netlify" />
        <Badge src={amazons3} alt="amazons3" />
      </RowContent>
    </Row>
    <Row>
      <Heading>Have Tinkered with</Heading>
      <Separator />
      <RowContent>
        <Badge src={gql} alt="gql" />
        <Badge src={contentful} alt="contentful" />
      </RowContent>
    </Row>
    <Row>
      <Heading>Tools</Heading>
      <Separator />
      <RowContent>
        <Badge src={vscode} alt="vscode" />
        <Badge src={npm} alt="npm" />
        <Badge src={git} alt="git" />
        <Badge src={github} alt="github" />
        <Badge src={jira} alt="jira" />
        <Badge src={slack} alt="slack" />
      </RowContent>
    </Row>
  </Wrapper>
);

export default Skills;
