/**
 * File Generated by Sideko (sideko.dev)
 */

import { Response as NodeResponse } from "node-fetch";
import { BinaryResponse } from "./binary-response";
import { ResponseType } from "./core-client";

export interface ApiPromiseProps {
  response: Response | NodeResponse;
  responseType: ResponseType | undefined;
}

export class ApiPromise<T> extends Promise<T> {
  constructor(private responsePromise: Promise<ApiPromiseProps>) {
    super((resolve) => {
      // left purposely as  a no-op to avoid automatically parsing the response
      // body. Instead, .then, .catch, and .finally overridden to explicitly
      // parse the response
      resolve(null as any);
    });
  }

  /**
   * Gets the raw response as rentured by `fetch` rather than automatically
   * parsing the response.
   */
  async asResponse(): Promise<Response | NodeResponse> {
    return (await this.responsePromise).response;
  }

  private async parseResponse(): Promise<T> {
    const { response, responseType } = await this.responsePromise;

    const contentType = response.headers.get("content-type");

    if (response.status === 204) {
      return null as unknown as T;
    } else if (responseType === "blob") {
      return new BinaryResponse(
        await response.blob(),
        contentType,
      ) as unknown as T;
    }

    // use a pattern to match json content type to handle
    // base case of application/json as well as vendor specfic
    // headers e.g. application/vnd.github+json
    const jsonPattern = /application\/.*json/g;
    if (contentType?.match(jsonPattern)) {
      return (await response.json()) as T;
    }

    // fall back on text
    return (await response.text()) as unknown as T;
  }

  override then<Result1 = T, Result2 = never>(
    onfulfilled?:
      | ((value: T) => Result1 | PromiseLike<Result1>)
      | undefined
      | null,
    onrejected?:
      | ((reason: any) => Result2 | PromiseLike<Result2>)
      | undefined
      | null,
  ): Promise<Result1 | Result2> {
    return this.parseResponse().then(onfulfilled, onrejected);
  }

  override catch<Result = never>(
    onrejected?:
      | ((reason: any) => Result | PromiseLike<Result>)
      | undefined
      | null,
  ): Promise<T | Result> {
    return this.parseResponse().catch(onrejected);
  }

  override finally(onfinally?: (() => void) | undefined | null): Promise<T> {
    return this.parseResponse().finally(onfinally);
  }
}
