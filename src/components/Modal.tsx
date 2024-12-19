import React from "react";

export default function Modal(props: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <div className="modal hidden" id={props.id}>
      <div className="modal-content">{props.children}</div>
    </div>
  );
}
