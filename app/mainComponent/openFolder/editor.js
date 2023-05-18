import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "../../..//node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftjsToHtml from "draftjs-to-html";

export default function EditorComp() {
    const [first, setfirst] = useState(false);
    return (
        <div>
            <Editor />
        </div>
    );
}
