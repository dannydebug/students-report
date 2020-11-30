export interface School {
  _id: string;
  name: string;
}

export interface Student {
  _id: string;
  name: string;
  surname: string;
  grade: number;
  schoolId: string;
}

export class Client {
  baseUrl = process.env.VUE_APP_BACKEND_URL;

  async getSchools() {
    const res = await fetch(this.baseUrl + "/schools");
    if (!res.ok) {
      return alert("Unable to fetch schools");
    }
    const data = await res.json();
    return data;
  }

  downloadStudentsCsvReport(id: string) {
    window.location.assign(this.baseUrl + `/schools/${id}/students.csv`);
  }
}
