import * as cdk from '@aws-cdk/core';
import * as codebuild from '@aws-cdk/aws-codebuild';
import { CodeBuildProject } from "@aws-cdk/aws-events-targets";
import { Schedule, Rule } from '@aws-cdk/aws-events';


export class EventsCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const proj = new codebuild.Project(this, 'MyProject', {
      buildSpec: codebuild.BuildSpec.fromObject({
        version: '0.2',
        phases: {
          build: {
            commands: [
              'echo "Hello, CodeBuild!"',
            ],
          },
        },
      }),
    });

    const codebuildTarget = new CodeBuildProject(proj);
  

    new Rule(this, 'ScheduleRule', {
      schedule: Schedule.cron({ minute: '20' }),
      targets: [codebuildTarget],
     });

  }
}
