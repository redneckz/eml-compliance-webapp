export class Resource<T> {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.get = this.get.bind(this);
  }

  async get(id?: string): Promise<T> {
    const resp = await fetch([this.baseURL, id].filter(Boolean).join('/'));
    return await resp.json();
  }

  async getAll(dataField?: string): Promise<T[]> {
    const resp = await fetch(this.baseURL);
    const data = await resp.json();
    return dataField ? data[dataField] : data;
  }
}
