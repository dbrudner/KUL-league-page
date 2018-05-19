import React, {Component} from 'react'
import Select from '../../../styled/elements/select'

export default function Step1(props) {

    const {experience, timePlayed, athleticism} = props.data

    return (
        <div>
            <div>
                <label>Which describes you? </label>
                <Select onChange={e => props.handleChange("experience", e.target.value)}>
                    <option value={1}>Newbie. Less than 3 Ultimate games played.</option>
                    <option value={2}>More than 3 games, but I still can't throw up field.</option>
                    <option value={3}>I can throw up field, but I am a much better cutter.</option>
                    <option value={4}>I can throw up field, down field, around the field, and through the field (I handle).</option>
                </Select>
            </div>
            <div>
            <label>Which describes you? </label>
                <Select onChange={e => props.handleChange("timePlayed", e.target.value)}>
                    <option value={1}>I said I'm a newbie! (0 experience).</option>
                    <option value={2}>A few months experience.</option>
                    <option value={3}>less than 2 years experience.</option>
                    <option value={4}>I'm addicted.</option>
                    <option value={5}>I'm back for more! (More than 5 years)</option>
                </Select>
            </div>
            <div>
                <Select onChange={e => props.handleChange("athleticism", e.target.value)}>
                    <option value={1}>I always guard the slowest person on the other team. (slowest)</option>
                    <option value={2}>I can guard the fastest guy on the other team...When he has cramps in both legs and a concussion. (slow)</option>
                    <option value={3}>I've done sports and can hold my own but not known for my speed. (average)</option>
                    <option value={4}>I'm as quick as I am modest so i'll put 4. (fast)</option>
                    <option value={5}>What's modest? Another name for slow?? I'm a cheeeeeeetah! (fastest)</option>
                </Select>
            </div>
        </div>
    )
}