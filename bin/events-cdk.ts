#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { EventsCdkStack } from '../lib/events-cdk-stack';

const app = new cdk.App();
new EventsCdkStack(app, 'EventsCdkStack');
