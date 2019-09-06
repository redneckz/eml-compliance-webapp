export class Resource<T> {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.get = this.get.bind(this);
  }

  async get(): Promise<T> {
    const resp = await fetch(this.baseURL);
    return await resp.json();
  }
}
