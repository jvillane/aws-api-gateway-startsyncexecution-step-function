# aws-api-gateway-startsyncexecution-step-function
A simple project that integrates API Gateway directly to Step Functions and awaits for its response

## Requirements

- aws-cli (installed and configured)
- aws-sam-cli

## Deployment

First, you must create the packaged.yaml:

`sam package --output-template-file packaged.yaml --template-file cloudformation.yaml --s3-bucket [S3_BUCKET]`

And then deploy the stack:

`sam deploy --template-file packaged.yaml --stack-name [STACK_NAME] --capabilities CAPABILITY_NAMED_IAM --capabilities CAPABILITY_IAM`

Where:

- `STACK_NAME` is the name of the stack
- `S3_BUCKET` refers to an existing S3 bucket where the OpenAPI definition is going to be upload
