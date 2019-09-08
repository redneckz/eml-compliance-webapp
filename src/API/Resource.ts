const API_URL: string = process.env.API_URL || 'http://server.jabiliot.com';

export class Resource<T> {
  private baseURL: string;
  private dataField?: string;

  constructor(resourceBaseURL: string, dataField?: string) {
    this.baseURL = `${API_URL}/${resourceBaseURL}`;
    this.dataField = dataField;
    this.get = this.get.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  async get(id?: string): Promise<T> {
    const resp = await fetch([this.baseURL, id].filter(Boolean).join('/'));
    return await resp.json();
  }

  async getAll(query?: string): Promise<T[]> {
    const resp = await fetch([this.baseURL, query].filter(Boolean).join('?'));
    const data = await resp.json();
    return this.dataField ? data[this.dataField] : data;
  }

  async post(query?: string) {
    const resp = await fetch([this.baseURL, query].filter(Boolean).join('?'), { method: 'POST' });
    const data = await resp.json();
    return this.dataField ? data[this.dataField] : data;
  }
}
