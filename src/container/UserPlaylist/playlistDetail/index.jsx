import React from 'react';
import {Button} from 'reactstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Track from '../../../components/track';
import './styles.scss';

const grid = 8;
const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
      
    // change background colour if dragging
    background: isDragging ? '#ededed' : 'none',
  
    // styles we need to apply on draggables
    ...draggableStyle,
  });
  
  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'none' : 'none',
  });

export default (props) => {
    return (
        <div className="artist-page artist-playlist-page">
        <div className="top-wrapper" style={{backgroundColor : props.currentPlaylist.color[3]}}>
            <h2>{props.currentPlaylist.name}</h2>
            <span>{props.currentPlaylist.tracks.length} tracks</span>
        </div>
        <div className="tracks-wrapper">
            <div className="tracks-container">
                <div className="action-container">
                    {/* <Button
                        color="secondary"
                        className="add-to-playlist-btn"
                        onClick={() => props.addToPlaylist()}
                    >                    
                    <span style={{marginRight: '5px'}}><i className="fa fa-plus-circle" /></span>
                    <span>Add to Playlist</span>
                    </Button> */}
                    <Button
                        className="playall-btn"
                        onClick={() => props.playTracks(props.currentPlaylist.tracks)}
                        color="default">Play all
                        <span style={{'margin-left': '10px'}}><i className="fa fa-play" /></span>
                    </Button>
                </div>
                <DragDropContext onDragEnd={(result) => props.onDragEnd(result, {playlistId: props.currentPlaylist.id})}>
                    <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                        >
                        {props.currentPlaylist.tracks.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided, snapshot) => (
                                <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={getItemStyle(
                                    snapshot.isDragging,
                                    provided.draggableProps.style
                                )}
                                >
                                {/* {item.title} */}
                                
                                <Track
                                    showCheckbox={false}
                                    // key={item.id}
                                    currentTrack={item}
                                    title={item.title}
                                    playTrack={props.playTrack}
                                />
                                </div>
                            )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                        </div>
                    )}
                    </Droppable>
                </DragDropContext>
                {/* {props.currentPlaylist.tracks.map(track => 
                    <Track
                        showCheckbox={false}
                        key={track.id}
                        currentTrack={track}
                        title={track.title}
                        playTrack={props.playTrack}
                    />
                )} */}
            </div>
        </div>
    </div>

    );
}