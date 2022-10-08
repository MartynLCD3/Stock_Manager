import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
let response: APIGatewayProxyResult | PromiseLike<APIGatewayProxyResult>;
import processID from "./src/core/functions/processID";

export async function deleteHandler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  try {
    const param: any = event.pathParameters;
    const { code, data } = await processID({ _id: param.id });
    response = {
      statusCode: code,
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.log(err);
  }
  return response;
}
