import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
let response: APIGatewayProxyResult | PromiseLike<APIGatewayProxyResult>;
import getProducts from "./src/core/functions/getProducts";

export async function readHandler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  try {
    const { code, data } = await getProducts();
    response = {
      statusCode: code,
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.log(event, err);
  }
  return response;
}
