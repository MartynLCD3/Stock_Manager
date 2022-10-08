import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
let response: APIGatewayProxyResult | PromiseLike<APIGatewayProxyResult>;
import processProduct from "./src/core/functions/processProduct";

export async function saveHandler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  try {
    let body: null;

    if (typeof event.body === "string") {
      body = JSON.parse(event.body);
    } else {
      body = event.body;
    }

    const { code, data } = await processProduct(body);
    response = {
      statusCode: code,
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.log(err);
  }
  return response;
}
