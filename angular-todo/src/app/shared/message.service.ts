import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class MessageService {
  messages: string[] = [];

  constructor(private toastr: ToastrService) {}

  add(message: string) {
    this.toastr.error(message, "Error");
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
