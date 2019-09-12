export const API_URL: string = process.env.API_URL || 'http://server.jabiliot.com';

export class Resource<T> {
  private baseURL: string;
  private dataField?: string;

  constructor(resourceBaseURL: string, dataField?: string) {
    this.baseURL = `${API_URL}/${resourceBaseURL}`;
    this.dataField = dataField;
    this.get = this.get.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  get(id?: string): Promise<T> {
    return this.fetch([this.baseURL, id].filter(Boolean).join('/'));
  }

  async getAll(query?: string): Promise<T[]> {
    const data = await this.fetch([this.baseURL, query].filter(Boolean).join('?'));
    return this.dataField ? data[this.dataField] : data;
  }

  async post(query?: string) {
    const data = await this.fetch([this.baseURL, query].filter(Boolean).join('?'), { method: 'POST' });
    return this.dataField ? data[this.dataField] : data;
  }

  private async fetch(input: RequestInfo, init?: RequestInit): Promise<any> {
    try {
      const resp = await fetch(input, init);
      return await resp.json();
    } catch (ex) {
      console.warn(input, ex);
      throw new Error(`[${input}] ${ex.message}`);
    }
  }
}
