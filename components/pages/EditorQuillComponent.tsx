"use client";

import React, { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

export function EditorComponent() {
    const { quill, quillRef } = useQuill();

    useEffect(() => {
        if (quill) {
            quill.clipboard.dangerouslyPasteHTML(
                "<h1>React Hook for Quill!</h1>"
            );

            quill.on("text-change", (delta, oldDelta, source) => {
                console.log("Text change!");
                console.log(quill.getText()); // Get text only
                console.log(quill.getContents()); // Get delta contents
                console.log(quill.root.innerHTML); // Get innerHTML using quill
                console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
            });
        }
    }, [quill]);

    return (
        <div className="w-full h-[350px]">
            <div ref={quillRef} />
        </div>
    );
}
