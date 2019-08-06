import * as React from "react";
import {Genre} from "../../../features/genres/models";

import styles from './GenreList.module.scss'
import {Boundary, OverflowList, Popover, PopoverInteractionKind, Tag} from "@blueprintjs/core";

interface Props {
    genres: Genre[]
}

const GenreList: React.FC<Props> = (props) => {
    const {genres} = props;

    return <div className={styles.genres}>
        <OverflowList items={genres}
                      collapseFrom={Boundary.END}
                      visibleItemRenderer={g => <Tag key={g.id} style={{marginRight: 5}}>{g.name}</Tag>}
                      overflowRenderer={items =>
                          <Popover interactionKind={PopoverInteractionKind.HOVER}>
                              <Tag interactive={true}><span style={{fontWeight: 500}}>...</span></Tag>
                              <div style={{padding: 5, textAlign: 'center'}}>
                                  {items.map(t => <div key={t.id} style={{marginBottom: 5}}>
                                      <Tag>
                                          {t.name}
                                      </Tag>
                                  </div>)}
                              </div>
                          </Popover>
                      }
        />
    </div>
}

export default GenreList;
export {GenreList}
