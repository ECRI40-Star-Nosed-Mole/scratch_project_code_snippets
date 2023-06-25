import React, { useState, useEffect } from 'react';

//  importing child components
import TagInput from '../../components/ui/TagInput/TagInput';

//  importing external functionality
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CodeMirror from '@uiw/react-codemirror';
import styles from './SnippetDisplay.module.scss';
import { langs } from '@uiw/codemirror-extensions-langs';

//  importing utils
import { Card, Button } from 'react-bootstrap';
import { set } from 'mongoose';

const SnippetDisplay = ({ selectedSnippet, getSnippet }) => {
  const defaultDisplayValues = {
    title: '',
    language: '',
    comments: '',
    storedCode: '',
    tags: []
  };

  const [copied, setCopied] = useState(false);
  const [editButtonState, setEditButtonState] = useState(false);
  const [currentDisplay, setCurrentDisplay] = useState(defaultDisplayValues);

  useEffect(() => {
    setCurrentDisplay(selectedSnippet);
  }, [selectedSnippet, getSnippet]);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const deleteSnippet = (snippetId) => {
    fetch('/snippets?' + new URLSearchParams({ snippetId }), {
      method: 'DELETE'
    })
      .then((response) => {
        if (response.ok) {
          setCurrentDisplay(defaultDisplayValues);
          getSnippet();
        }
      })
      .catch((err) => {
        return {
          log: `SnippetDisiplay.deleteSnippet: Error: ${err}`,
          status: err.status,
          message: 'There was an error deleting snippet.'
        };
      });
  };

  const editSnippet = (snippetId) => {
    fetch(`/snippets?${new URLSearchParams({ snippetId })}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(currentDisplay)
    })
      .then((response) => {
        //Are we using this response anywhere? IF not, delete this.
        return response.json();
      })
      .then((data) => {
        console.log(data);
        getSnippet();
      })
      .catch((err) => {
        //What's happening here? Where is this being returned to?
        return {
          log: `SnippetDisplay.editSnippet: Error: ${err}`,
          status: err.status,
          message: 'There was an error editing code snippet.'
        };
      });
  };

  const displayContent = (
    <div className={styles.entireSnippetDisplay}>
      <div className="displayContainer">
        <div className={styles.displayRow}>
          <div className="aspect-entry">
            <span className="title"> Title: </span>
            <input
              readOnly={!editButtonState}
              defaultValue={currentDisplay.title}
              className="titleEdit"
              onChange={(e) => {
                if (editButtonState) {
                  setCurrentDisplay({
                    ...currentDisplay,
                    title: e.target.value
                  });
                }
              }}
            ></input>
          </div>
          <div className="aspect-entry">
            <span className="language"> Language: </span>
            <input
              readOnly={!editButtonState}
              defaultValue={currentDisplay.language}
              className="languageEdit"
              onChange={(e) => {
                if (editButtonState) {
                  setCurrentDisplay({
                    ...currentDisplay,
                    language: e.target.value
                  });
                }
              }}
            ></input>
          </div>
        </div>
        <div className={styles.displayRow}>
          <div className="aspect-entry">
            <span className="comments"> Comments: </span>
            <input
              readOnly={!editButtonState}
              defaultValue={currentDisplay.comments}
              className="commentsEdit"
              onChange={(e) => {
                if (editButtonState) {
                  setCurrentDisplay({
                    ...currentDisplay,
                    comments: e.target.value
                  });
                }
              }}
            ></input>
          </div>
        </div>

        <TagInput
          className="tags display-row"
          onChange={(e) => {
            if (editButtonState) {
              setCurrentDisplay({ ...currentDisplay, tags: e });
            }
          }}
          defaultTags={currentDisplay.tags}
          readOnly={!editButtonState}
        />
        {/* <input className="tagsEdit" onChange={(e) => {setTags}}> <span> Title: </span> {snippetTagList}</input> */}
      </div>

      <CodeMirror
        readOnly={!editButtonState}
        className={styles.editor}
        height="500px"
        id="storedCode"
        value={currentDisplay.storedCode}
        extensions={[langs.tsx()]}
        //   placeholder={'const sayHi = () => {\n  console.log(\'Hello World!)\n}'}
        onChange={(e) => {
          setCurrentDisplay({ ...currentDisplay, storedCode: e });
        }}
      >
        <CopyToClipboard text={currentDisplay.storedCode}>
          <Button className={styles.addButton} onClick={handleCopy}>
            {' '}
            Copy Code Snippet{' '}
          </Button>
        </CopyToClipboard>
        {copied && <span>copied to clipboard!</span>}
      </CodeMirror>
    </div>
  );

  return (
    <React.Fragment>
      <Card className={styles.card} id="right">
        {displayContent}

        <div className={styles.buttonDiv}>
          <Button
            className="deleteButton"
            onClick={() => {
              deleteSnippet(selectedSnippet._id);
            }}
          >
            Delete Snippet
          </Button>
          <Button
            className="editButton"
            onClick={() => {
              //editSnippet(selectedSnippet.id);
              editButtonState
                ? setEditButtonState(false)
                : setEditButtonState(true);
            }}
          >
            {editButtonState ? 'Close Editor' : 'Edit Snippet'}
          </Button>
          <Button
            style={{ display: editButtonState ? 'flex' : 'none' }}
            className="saveEditButton"
            onClick={() => {
              console.dir(selectedSnippet);
              editSnippet(selectedSnippet._id);
              setEditButtonState(false);
            }}
          >
            Save Edit
          </Button>
        </div>
      </Card>
    </React.Fragment>
  );
};

SnippetDisplay.propTypes = {
  selectedSnippet: PropTypes.object,
  getSnippet: PropTypes.func
};
export default SnippetDisplay;
